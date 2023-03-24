import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            redirect: false,
            deleteItem: null,
        }
    }

    componentDidMount(e = false) {
        axios.get('/employees').then(rep => {
            this.setState({
                items: rep.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    handleClick = () => {
        this.setState({
            redirect: true
        });
        console.log("true");
    };
    Delete = (e) => {
        this.setState({
            deleteItem: e.target.value
        });
    }
    confirmDelete = () => {
        axios.delete('/employees/deleteEmployee/' + this.state.deleteItem)
            .then(rep => {
                document.getElementById("close").click()
                this.setState({ deleteItem: null });
                this.componentDidMount();
            }).catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="d-grid gap-2">
                            <button onClick={this.handleClick} className="btn btn-primary" type="button">
                                Add Item
                            </button>
                            {this.state.redirect && <Navigate to="AddItem" />}
                        </div>
                    </li>
                    {this.state.items.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <div className="d-flex">
                                <div className="me-auto p-2">{item.firstName}</div>
                                <div className='p-2'>
                                    <button type="button" value={item._id} onClick={this.Delete} className="btn btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                                </div>

                            </div>
                        </li>
                    ))}

                </ul>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                do you delete this item?
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="close" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.confirmDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Items;