import React from "react";
function textInfo(params) {
    switch (params) {
        case 1:
            return <p className="form-info__msg">Сообщение отправлино</p>
        case 2:
            return <p className="form-info__msg">Сообщение отправлино! Наш менеджер скоро с Вами свяжется</p>
        default:
           return  <p className="form-info__msg">Ошибка сервера</p>
    }
}
const FormInfo = props => {
  return (
    <div className="form-info">
        {textInfo(props.info)}
    </div>
  );
};

export default FormInfo;