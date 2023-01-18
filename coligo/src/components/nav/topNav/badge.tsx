export default function Badge(props: { className?: string }) {
	const { className } = props
	return (
		<div
			className={`h-[10px] w-[10px]
    bg-primary-200 rounded-full
    absolute top-0 right-0
    ${className}`}
		></div>
	)
}
