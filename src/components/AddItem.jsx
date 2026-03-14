const AddItem = ({onAddItem}) => {
    return (
    <div className='item-add-form'>
        <div className="row justify-content-start">
            <div className="col-4">
                <input className="form-control" placeholder="Напишите свое дело" />
            </div>
            <div className="col-2">
            <button className="btn btn-outline-secondary" onClick={() => onAddItem('Шаблон')}>Добавить</button>
            </div>  
        </div>
    </div>
    )
}

export default AddItem;