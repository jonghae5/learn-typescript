interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
    // something: object;
}

// 1. 상품 목록을 받아오기 위한 Product API
function fetchProducts(): Promise<Product[]> {
    // ..
    return 
}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}
// function displayProductDetail(shoppingItem: ProductDetail) {
//     return
// }
type ShoppingItem = Pick<Product,'id' | 'name' | 'price'>;
// 2. 특정 상품의 상세 정보를 표현하기 위한 함수
function displayProductDetail(shoppingItem: ShoppingItem) {
    return
}

// 3. Partial 특정 상품 정보를 업데이트(갱신)하는 함수


interface UpdateProduct {
    id?: number;
    name?: string;
    price?: number;
    brand?: string;
    stock?: number;
    // something: object;
}


// function updateProductItem(productItem: UpdateProduct) {
//     return
// }
function updateProductItem(productItem: Partial<Product>) {
    return
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profile'];
// }

// #2
// 인덱스 시그니쳐
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// }

// #3
// type UserProfileUpdate = {
//     [p in keyof UserProfile]?: UserProfile[p];
// }

// #4
type Subset<T> = {
    [p in keyof T]?: T[p]
}
export {}