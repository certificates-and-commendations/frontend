import Form from '../Form/Form';
import authApi from '../../utils/AuthApi';

function Recovery({
	popupName,
	title,
	isOpened,
	buttonText,
	onClose,
	setIsLoginPopupOpen,
	formValue,
	setFormValue,
	isLoading,
	setIsLoading,
}) {
	function handleRecovery() {}

	return (
		<Form
			popupName={popupName}
			title={title}
			isOpened={isOpened}
			buttonText={buttonText}
			onClose={onClose}
			formValue={formValue}
			setFormValue={setFormValue}
			handleSubmittingAForm={() => handleRecovery()}
		/>
	);
}

export default Recovery;
