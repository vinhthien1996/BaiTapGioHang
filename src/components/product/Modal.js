import React, { Component } from 'react';

export default class Modal extends Component {
    render() {

        const {deleteCart, editCart} = this.props;

        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Mã sản phẩm</td>
                                        <td>Hình ảnh</td>
                                        <td>Tên sản phẩm</td>
                                        <td>Số lượng</td>
                                        <td>Đơn giá</td>
                                        <td>Thành tiền</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cart.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{product.maSP}</td>
                                                <td><img src={product.hinhAnh} width="30" alt="Product" /></td>
                                                <td>{product.tenSP}</td>
                                                <td><button className="btn btn-sm btn-secondary" onClick={() => editCart(product.maSP, false)}>-</button> {product.soLuong} <button className="btn btn-sm btn-secondary" onClick={() => editCart(product.maSP, true)}>+</button></td>
                                                <td>{(product.donGia).toLocaleString()}</td>
                                                <td>{(product.soLuong * product.donGia).toLocaleString()}</td>
                                                <td className="text-center"><button className="btn btn-danger btn-sm" onClick={() => deleteCart(product.maSP)}>Xoá</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5"></td>
                                        <td>Tổng tiền</td>
                                        <td>
                                            {
                                                this.props.cart.reduce((tong, item, index) => {
                                                    return tong+= (item.soLuong * item.donGia);
                                                }, 0).toLocaleString()
                                            }
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
