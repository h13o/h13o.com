export default function Layout({ children }) {
    return (
        <main>
            <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
                <div className="max-w-screen-md md:mx-auto px-8">
                    {children}
                </div>
            </div>
        </main>
    )
}