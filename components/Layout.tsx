export default function Layout({ children }) {
    return (
        <main>
            <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
                {children}
            </div>
        </main>
    )
}