import { Routes } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
// import { useState } from 'react';

import React, { useState } from 'react';
import CertificateEditor from '../CertificateEditor/CertificateEditor';
// import { Routes } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Recovery from '../Recovery/Recovery';

// import { Route, Navigate } from 'react-router-dom';

// import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
	// СТЕЙТ СОСТОЯНИЯ LOGIN
	// const [isloggedIn, setIsloggedIn] = useState(false);
	// тест поле

	const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
	const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
	const [isRecoveryPopupOpen, setIsRecoveryPopupOpen] = useState(false);

	function closeAllPopups() {
		setIsRegisterPopupOpen(false);
		setIsLoginPopupOpen(false);
		setIsRecoveryPopupOpen(false);
	}

	return (

		<div className="App">
			<Header isMain />
			<Header isMain={false} />
		
		<Routes >

		<>
			<main className="main-content">
				<CertificateEditor />
			</main>
			{isRegisterPopupOpen ? (
				<Register
					title="Регистрация"
					buttonText="Зарегистрироваться"
					popupName="register"
					isOpened={isRegisterPopupOpen}
					onClose={() => closeAllPopups()}
				/>
			) : undefined}
			{isLoginPopupOpen ? (
				<Login
					title="Вход"
					buttonText="Войти"
					popupName="login"
					isOpened={isLoginPopupOpen}
					onClose={() => closeAllPopups()}
					setIsRecoveryPopupOpen={setIsRecoveryPopupOpen}
				/>
			) : undefined}
			{isRecoveryPopupOpen ? (
				<Recovery
					title="Забыли пароль?"
					buttonText="Отправить инструкцию"
					popupName="recovery"
					isOpened={isRecoveryPopupOpen}
					onClose={() => closeAllPopups()}
					setIsLoginPopupOpen={setIsLoginPopupOpen}
				/>
			) : undefined}
			{/* <Routes > */}

			{/* По готовности компонента Main кладем его в роут */}
			{/* <Route path='/' element={ Ожидаю Main } /> */}

			{/* По готовности компонента Editor кладем его в роут */}
			{/* <Route path='/editor' element={<ProtectedRouteElement loggedIn={isloggedIn} element={ Ожидаю Editor } />} /> */}

			{/* По готовности компонента Editor кладем его в роут */}
			{/* <Route path='/profile' element={<ProtectedRouteElement loggedIn={isloggedIn} element={ Ожидаю Profile } />} /> */}

			{/* По готовности компонента NotFoundPage кладем его в роут */}
			{/* <Route path='*' element={ Ожидаю NotFoundPage } /> */}


		</Routes>
		<Footer />
		</div>

			{/* </Routes> */}
		</>

	);
}

export default App;
