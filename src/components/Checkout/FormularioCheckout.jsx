const FormularioCheckout = ({dataForm, handleChangeInput, handleSubmit}) => {
  return (
    <div>
    <h1>Formulario de Compra</h1>
    <form onSubmit={handleSubmit}> 
      <div className="seccionContacto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Ingrese su nombre..." value={dataForm.name} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telefono:</label>
          <input type="number" className="form-control" id="phone" name="phone" placeholder="Ingrese su telefono sin guiones ni 0 ni 15..." value={dataForm.phone} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="@ Ingrese su mail..." value={dataForm.email} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
          <label htmlFor="payment" className="form-label">Forma de Pago:</label>
          <div>
          <label className="form-option"><input type="radio" name="payment" value="visa" checked={dataForm.payment === 'visa'} onChange={handleChangeInput}/>Visa</label>
          <label className="form-option"><input type="radio" name="payment" value="mastercard" checked={dataForm.payment === 'mastercard'} onChange={handleChangeInput}/>MasterCard</label>
          <label className="form-option"><input type="radio" name="payment" value="american" checked={dataForm.payment === 'american'} onChange={handleChangeInput}/>American Express</label>
          <label className="form-option"><input type="radio" name="payment" value="cabal" checked={dataForm.payment === 'cabal'} onChange={handleChangeInput}/>Cabal</label>
          <label className="form-option"><input type="radio" name="payment" value="naranja" checked={dataForm.payment === 'naranja'} onChange={handleChangeInput}/>Naranja</label>
          <label className="form-option"><input type="radio" name="payment" value="paypal" checked={dataForm.payment === 'paypal'} onChange={handleChangeInput}/>PayPal</label>
          <label className="form-option"><input type="radio" name="payment" value="mercadopago" checked={dataForm.payment === 'mercadopago'} onChange={handleChangeInput}/>Mercado Pago</label>
          <label className="form-option"><input type="radio" name="payment" value="modo" checked={dataForm.payment === 'modo'} onChange={handleChangeInput}/>Modo</label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comentarios:</label>
          <textarea id="comment" className="form-control" name="comment" rows="5" placeholder="Ingrese comentario aquí..." value={dataForm.comment} onChange={handleChangeInput}/>
        </div>
        <button className="btn" type="submit">Enviar Orden</button>
      </div>
    </form>
    </div>
  )
}

export default FormularioCheckout