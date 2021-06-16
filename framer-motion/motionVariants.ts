export const motionPageVariants = {
	hidden: {
		y: "10vh",
		opacity: 0
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut"
		}
	},
	exit: {
		y: "-10vh",
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut"
		}
	}
}