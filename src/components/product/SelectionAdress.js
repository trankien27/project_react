const SelectionAdress = ({ label, options, value, setValue }) => {

    return (
        <div>

            <label>Địa chỉ</label>
            <select className="selection">
                {listProvince && listProvince.map((province) => {
                    return (
                        <option value={province?.code} key={province?.code}>{province.name}</option>
                    )

                })}
            </select>
        </div>
    )
}
export default SelectionAdress;