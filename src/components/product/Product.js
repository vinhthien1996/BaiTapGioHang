import React, { Component } from 'react'

export default class Product extends Component {

    render() {

        const { prod, onViewDetail, addToCart, keyProduct } = this.props;
        
        return (
            
            <div className="col-4" key={keyProduct}>
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} height="250" alt="Product" />
                    <div className="card-body text-center">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button className="btn btn-success m-1" onClick={() => onViewDetail(prod)}>Xem chi tiết</button>
                        <button className="btn btn-danger m-1" onClick={() => addToCart(prod)}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
