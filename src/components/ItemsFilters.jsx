import React from "react"

class ItemsFilter extends React.Component {
    render() {
        const { onFilterChange } = this.props;

        return (
            <div className="btn-group" role="group" id="filter">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onClick={() => onFilterChange('all')}/>
                <label className="btn btn-outline-info" htmlFor="btnradio1">Все</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={() => onFilterChange('active')}>Активное</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                <label className="btn btn-outline-success" htmlFor="btnradio3" onClick={() => onFilterChange('done')}>Сделанное</label>
            </div>
        );
    }
}

export default ItemsFilter;