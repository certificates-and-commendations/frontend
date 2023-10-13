import clsx from 'clsx';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonDowload.css';
import downloadIcon from '../../../images/download-b.svg';
import printerIcon from '../../../images/printer-b.svg';
import mailIcon from '../../../images/mail-b.svg';

function ButtonDowload({ onDownload, onPrint, onMail }) {
	const [isActive, setIsActive] = useState(false);

	const buttonClass = clsx('button-download', {
		'button-download_active': isActive,
	});

	const buttonContainerClass = clsx('button-dowload__container', {
		'button-download__container_hidden': !isActive,
	});

	function handleDownload() {
		console.log('Download');
		onDownload();
	}

	function handlePrint() {
		console.log('Print');
		onPrint();
	}

	function handleMail() {
		console.log('Mail');
		onMail();
	}

	return (
		<div className="button__component">
			<button
				onClick={() => setIsActive(!isActive)}
				className={buttonClass}
				type="button"
			/>
			<div className={buttonContainerClass}>
				<div className="button-dowload__option">
					<img
						alt="icon"
						className="button-dowload__option-img"
						src={downloadIcon}
					/>
					<button
						onClick={handleDownload}
						type="button"
						className="button-dowload__option-text"
					>
						Скачать на устройство
					</button>
				</div>
				<div className="button-dowload__option">
					<img
						alt="icon"
						className="button-dowload__option-img"
						src={printerIcon}
					/>
					<button
						onClick={handlePrint}
						type="button"
						className="button-dowload__option-text"
					>
						Отправить на печать
					</button>
				</div>
				<div className="button-dowload__option">
					<img
						alt="icon"
						className="button-dowload__option-img"
						src={mailIcon}
					/>
					<button
						onClick={handleMail}
						type="button"
						className="button-dowload__option-text"
					>
						Отправить на почту
					</button>
				</div>
			</div>
		</div>
	);
}

ButtonDowload.propTypes = {
	onDownload: PropTypes.func.isRequired,
	onPrint: PropTypes.func.isRequired,
	onMail: PropTypes.func.isRequired,
};

export default ButtonDowload;
