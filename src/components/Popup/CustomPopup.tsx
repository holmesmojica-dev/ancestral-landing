import { useEffect, useRef } from "react";

interface CustomPopupProps {
	isOpen: boolean;
	title: string;
	children: React.ReactNode;
	onClose: () => void;
}

const CustomPopup: React.FC<CustomPopupProps> = ({
	isOpen,
	title,
	children,
	onClose,
}) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;

		if (!dialog) {
			return;
		}

		if (isOpen && !dialog.open) {
			dialog.showModal();
		}

		if (!isOpen && dialog.open) {
			dialog.close();
		}
	}, [isOpen]);

	return (
		<dialog
			ref={dialogRef}
			onClose={onClose}
			className="position-fixed vh-100 vw-100 z-1 top-0 left-0 border-0 p-0 m-auto bg-transparent"
			aria-labelledby="popup-title"
		>
			<div className="w-100 h-100 position-relative overflow-y-auto">
				<div className="d-flex justify-content-center align-self-center container-fluid py-5">
					<div className="c-bg-white p-4 rounded-3 col-12 col-sm-11 col-md-10 col-lg-8 col-xl-7">
						<div className="d-flex justify-content-between">
							<h2
								id="popup-title"
								className="c-fc-secondary c-fw-semibold c-ff-inter c-fs-md"
							>
								{title}
							</h2>

							<button
								type="button"
								className="btn-close"
								onClick={onClose}
								aria-label="Close popup"
							></button>
						</div>

						<hr className="w-100 c-fc-primary border-2" />

						<div>{children}</div>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default CustomPopup;