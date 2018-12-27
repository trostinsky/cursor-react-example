// 1. Разбираемся с инпутами +
// 2. Делаем каркас(верстку) формы для регистрации +
// 3. Оживляем форму, добавляем проверку на правильность +
// 4. Подключаем React Router
// 5. Делаем несколько базовых страниц
// 6. Делаем закрытую страницу(только для залогиненных)

// Model – Data / Данные
// View – Styled Components / Вид
// Controller –  То что связывает модель и вид

import React from "react";
import styled from "styled-components";
import InputController from "./common/inputController";

// this.props.название – Снаружи
// this.state.название – Внутри

// Шаблон обращения к данным внутри компонента
// this.(props || state).название_переменной
const Input = styled.input`
  width: 250px;
  height: 40px;
  &:focus{
    outline: none !important;
  }
  display: block;
  margin: 20px;
  padding-left: 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 250px;
  height: 40px;
  background-color:#28b764;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  border: none;
  display: block;
  margin: 20px;
`;

const ButtonActive = styled(Button)`
  width: 300px;
  background-color:#e23e3d;
`;

const ButtonUnActive = styled(ButtonActive)`
  background-color: #969696;
`;

const Error = styled.p`
  font-size: 12px;
  color: #e23e3d;
  padding-left: 20px;
`;

class NameComponent extends React.Component {
    render() {
        return (
            <div>
                My name: {this.props.name}
            </div>
        )
    }
}

class SignUpButton extends React.Component {
    state = {
        subscribed: false
    }

    changeSubscribe = () => {
        this.setState({
            subscribed: !this.state.subscribed
        });
    }

    render() {
        return (
            <div>
                {
                    !this.state.subscribed ?
                        <ButtonActive onClick={this.changeSubscribe}>
                            Подписаться ––––– {this.props.subscribers}
                        </ButtonActive> :
                        <ButtonUnActive onClick={this.changeSubscribe}>
                            Отписаться ––––– {this.props.subscribers + 1}
                        </ButtonUnActive>
                }
            </div>
        )
    }
}

const RULES = {
    NAME: /^[a-zа-я]{2,}$/gi,
    PHONE: /^\+380[0-9]{9}$/gi
}

export default class SignUp extends InputController {
    state = {
        name: "",
        phone: "",
        validName: true,
        validPhone: true
    }

    validate = () => {
        // 1. Проверяем соответсвие поля на правила(регулярка или str.length)
        // 2. Показываем сообщение об ошибке если валидация не прошла
        if(!RULES.NAME.test(this.state.name)){
            this.setState({
                validName: false
            })
        }

        if(!RULES.PHONE.test(this.state.phone)){
            this.setState({
                validPhone: false
            })
        }
    }

    resetError(fieldName){
        this.setState({
            [fieldName]: true
        })
    }

    render() {
        return (
            <div>
                <Input placeholder="Name"
                       value={this.state.name}
                       onFocus={this.resetError.bind(this, "validName")}
                       onChange={this.changeInput.bind(this, "name")}
                />
                {
                    !this.state.validName ?
                        <Error>
                            Имя должно состоять только из букв и быть длинной от 2ух символов
                        </Error> :
                        null
                }
                <Input placeholder="Phone"
                       type="phone"
                       value={this.state.phone}
                       onFocus={this.resetError.bind(this, "validPhone")}
                       onChange={this.changeInput.bind(this, "phone")}
                />
                {
                    !this.state.validPhone ?
                        <Error>Телефон должен быть вида +380*********</Error> :
                        null
                }
                <Button onClick={this.validate}>Регистрация</Button>
            </div>
        )
    }
}