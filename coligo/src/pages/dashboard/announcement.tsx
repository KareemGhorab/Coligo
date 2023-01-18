export default function Announcement(props: { className?: string }) {
	const { className } = props

	return <section className={`bg-primary-100 ${className}`}>Announcement</section>
}
