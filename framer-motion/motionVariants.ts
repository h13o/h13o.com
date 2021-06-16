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
			ease: "easeInOut",
			staggerChildren: 0.2
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

export const motionComponentVariants = {
	hidden: {
		y: "5vh",
		opacity: 0
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		}
	},
	exit: {
		y: "-5vh",
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut"
		}
	}
}