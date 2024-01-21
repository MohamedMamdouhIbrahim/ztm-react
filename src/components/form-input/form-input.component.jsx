import "./form-component.styles.scss"
export default  function FormInput({label,...otherProps})
{
    console.log([{name:"m,mamdouh"},{},{}])


    return(
        <div className="group">
           <input className="form-input" {...otherProps}/>
            {label &&(
            <label className={`${otherProps.value.length>0 ? "shrink":""} form-input-label`} >{label}</label>
            )}
            
        </div>
    )
}