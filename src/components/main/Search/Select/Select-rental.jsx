import "./Select-rental.css"

const SelectRental =()=>{
	return(
		<div> 
            <div>
            <h6>CENTRO DE SKI</h6>
                <select class="form-select">
                    <option selected>Las Leñas</option>
                    <option value="2">Chapelco</option>
                    <option value="3">Castor</option>
                    <option value="4">Catedral</option>
                </select>
            </div>   
            <div>
                <h6>EQUIPOS</h6>
                <select class="form-select">
                    <option selected><span class="texto-secundario">Que tipo de equipos necesitas?</span></option>
                    <option value="1">Ski SPORT</option>
                    <option value="2">Ski ALTA GAMA</option>
                    <option value="3">Snowboard SPORT</option>
                    <option value="4">Snowboard ALTA GAMA</option>
                </select>
            </div> 
			<div>
                <h6>PASAJERO</h6>
                <select class="form-select">
                    <option selected>Adulto (+12 Años)</option>
                    <option value="1">Menor (6 a 11 Años)</option>
                    <option value="2">Child (3 a 5 Años)</option>
                    <option value="3">Infant (0 a 2 Años)</option>
                </select>
            </div>    
		</div>   
	)
}

export default SelectRental
