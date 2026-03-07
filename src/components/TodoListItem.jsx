import React from "react";

class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }
   
    onLabelClick() {
        console.log(`Нажато: ${this.props.label}`)
        this.setState({done: true});
   }
   
        onMarkImportant = () => {
            this.setState({
                important: true
            })
        }
   
    render() {

        const {label} = this.props

        const {done, important} = this.state
        let className = 'item-list-base';
        if (done) { //значит истинно
            className += ' done';
        }

        if(important) {
            className += ' important';
        }

        return <div>
            <span 
            onClick={this.onLabelClick.bind(this)}
            className={className}>
            {label}
        </span>
            <button type="button" onClick={this.onMarkImportant} className="btn btn-outline-primary my-button mx-1"><i class="fa-solid fa-bookmark"></i></button>
            <button type="button" className="btn btn-outline-success my-button mx-1"><i className="fa-solid fa-check"></i>
            </button>
            <button type="button" className="btn btn-outline-danger my-button mx-1"><i className="fa-solid fa-trash-can"></i>
            </button>
        </div> 
    }

}

export default TodoListItem;