import './App.css';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcInput from '@grapecity/wijmo.react.input';
import { createRef } from 'react';

function App() {
  const name = createRef();
  const email = createRef();
  const phone = createRef();
  const social = createRef();
  function submitForm(event) {
    if(isFormComplete()) {
      alert('User Information:\nName: ' + name.current.control.value + 
      '\nEmail: ' + email.current.control.value + '\nPhone Number: ' + phone.current.control.value + 
      '\nSSN: ' + social.current.control.value)
    } else {
      event.preventDefault();
    }
  }
  function valueChanged(ctrl) {
    wjcCore.toggleClass(ctrl.hostElement, 'state-invalid', !ctrl.maskFull);
  }
  function isFormComplete() {
    if(name.current.control.value !== '' && name.current.control.value !== '' && name.current.control.maskFull && name.current.control.maskFull) {
      return true;
    }
    return false;
  }
  return (
    <div className="form-control">
      <div className="form-header">
        <span>User Information</span>
      </div>
      <form className="form-body" onSubmit={submitForm}>
        <div className="form-element">
          <wjcInput.InputMask ref={name} id="name" placeholder="Name"></wjcInput.InputMask>
        </div>
        <div className="form-element">
          <wjcInput.InputMask ref={email} id="email" placeholder="Email"></wjcInput.InputMask>
        </div>
        <div className="form-element">
          <wjcInput.InputMask ref={phone} id="phone" placeholder="Phone Number" mask="000-000-0000" isRequired={false} value="" promptChar="#" valueChanged={valueChanged}></wjcInput.InputMask>
        </div>
        <div className="form-element">
          <wjcInput.InputMask ref={social} id="social" placeholder="Social Security Number" mask="000-00-0000" isRequired={false} value="" promptChar="*" valueChanged={valueChanged}></wjcInput.InputMask>
        </div>
        <div className="form-footer">
          <button className="form-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
