import React, { Component } from 'react';
import Product from './Product';
import ProductData from './ProductData.json';
import Modal from './Modal';

export default class ProductList extends Component {

    state = {
        productDetails: ProductData[0],
        cart: []
    }

    renderProlductList = () => {
        return ProductData.map((product, index) => {
            return <Product onViewDetail={this.viewDetailHandler} addToCart={this.addToCart} key={index} keyProduct={product.maSP} prod={product} />
        });
    }

    viewDetailHandler = (product) => {
        this.setState({
            productDetails: product,
        });
    }

    addToCart = (product) => {

        let prd = {
            "maSP": product.maSP,
            "tenSP": product.tenSP,
            "donGia": product.donGia,
            "hinhAnh": product.hinhAnh,
            "soLuong": 1,
        }

        let newCart = [...this.state.cart];

        let index = this.state.cart.findIndex(item => item.maSP === product.maSP);

        if (index !== -1) {
            newCart[index].soLuong += 1;
            this.setState({
                cart: newCart
            });
        } else {
            newCart.push(prd);
            this.setState({
                cart: newCart
            })
        }
    }

    deleteCart = (maSP) => {
        let newCart = [...this.state.cart];
        let index = newCart.findIndex(item => item.maSP === maSP);
        
        if(index !== -1) {
            newCart.splice(index, 1);
        }
        this.setState({
            cart: newCart
        });
    }

    editCart = (maSP, check) => {
        let newCart = [...this.state.cart];
        let index = newCart.findIndex(item => item.maSP === maSP);

        if(check) {
            newCart[index].soLuong += 1;
        } else {
            if(newCart[index].soLuong > 1) {
               newCart[index].soLuong -= 1;
            }
        }
        this.setState({
            cart: newCart
        });
    }

    render() {

        const { productDetails, cart } = this.state;

        let tongSL = this.state.cart.reduce((tong, item, index) => {
            return tong += item.soLuong;
        }, 0)

        return (
            <div>
                <div className="mt-4 text-right">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modelId">Giỏ hàng ({tongSL})</button>
                </div>
                <h2 className="text-center">Danh sách sản phẩm</h2>
                <div className="row">
                    {this.renderProlductList()}
                </div>
                <Modal cart={cart} deleteCart={this.deleteCart} editCart={this.editCart} />
                <div className="mt-4 row">
                    <div className="col-4">
                        <h5 className="text-center">{productDetails.tenSP}</h5>
                        <img src={productDetails.hinhAnh} className="img-fluid" alt="Product Detail" />
                    </div>
                    <div className="col-8">
                        <h5>Thông số kỹ thuật</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{productDetails.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{productDetails.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{productDetails.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{productDetails.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{productDetails.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <td>{productDetails.ram}</td>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <td>{productDetails.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
