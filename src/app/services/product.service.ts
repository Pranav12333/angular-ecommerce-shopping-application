import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProduct: any = [];
  filteredProducts: any[] = [];

  private totalQuantitySubject = new BehaviorSubject<number>(0);
  totalQuantity$ = this.totalQuantitySubject.asObservable();

  private filteredProductsSubject = new BehaviorSubject<any[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  private allProductSubject = new BehaviorSubject<boolean>(false);
  allProduct$ = this.allProductSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllProduct().subscribe((products) => {
      this.allProduct = products;
    });
  }

  setAllProduct(value: boolean) {
    this.allProductSubject.next(value);
  }

  // filter the products for search bar
  filterProductsByTitle(event: Event) {
    const searchText = (event.target as HTMLInputElement).value;
    this.filteredProducts = this.allProduct.filter((product: { title: string }) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    this.filteredProductsSubject.next(this.filteredProducts);
  }

  compareData(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/allProduct").pipe(
      map(products => products.filter(product => product.cart === 1))
    );
  }
  
  // compareData(): Observable<any[]> {
  //   return this.http.get<any[]>("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json").pipe(
  //     map(products => products.filter(product => product.cart === 1))
  //   );
  // }

  // updateTotalQuantity(quantity: number) {
  //   this.totalQuantitySubject.next(quantity);
  // }
  updateTotalQuantity(quantity: number) {
    this.totalQuantitySubject.next(quantity);
  }
  
  getShowProductDropdown(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/showProductDropdown");
  }
  // getShowProductDropdown(): Observable<any[]> {
  //   return this.http.get<any[]>("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json");
  // }
  
  getAddProductDropdown(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/addProductDropdown");
  }
  // getAddProductDropdown(): Observable<any[]> {
  //   return this.http.get<any[]>("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json");
  // }
  
  getMansWearDropdown(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/mansWearDropdown");
  }
  // getMansWearDropdown(): Observable<any[]>{
  //   return this.http.get<any[]>("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json");
  // }
  
  getWomensWearDropdown(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/womensWearDropdown");
  }
  // getWomensWearDropdown(): Observable<any[]>{
  //   return this.http.get<any[]>("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json");
  // }
  
  getProductReview(){
    return this.http.get("http://localhost:3000/reviewsData");
  }
  // getProductReview(){
  //   return this.http.get("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json");
  // }
  
  postProductReview(data:any){
    return this.http.post("http://localhost:3000/reviewsData",data);
  }
  // postProductReview(data:any){
  //   return this.http.post("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json",data);
  // }


  getAllProduct(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/allProduct");
  }
  
  // getAllProduct(): Observable<any[]> {
  //   return this.http.get<any[]>("https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json");
  // }
  
  getDataById(id: any, data: any) {
    return this.http.get(`http://localhost:3000/allProduct/${id}`, data);
  }

  // getDataById(id: any, data: any) {
  //   return this.http.get(`https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json${id}`, data);
  // }
  
  getReviewById(id: any, data:any){
    return this.http.get(`https://res.cloudinary.com/dzmidzgr4/raw/upload/v1696786615/test.json/${id}`,data);
  }

  postData(data: any) {
    return this.http.post("http://localhost:3000/allProduct", data);
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:3000/allProduct/${id}`);
  }
  updateData(id: any, data: any) {
    return this.http.put(`http://localhost:3000/allProduct/${id}`, data);
  }

  //add to cart patch 
  patchData(id: any, data: any) {
    return this.http.patch(`http://localhost:3000/allProduct/${id}`, data);
  }
}
