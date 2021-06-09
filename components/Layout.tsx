export default function Layout({ children }) {
    return (
        <main>
            <div className="min-h-screen bg-gradient-to-b from-white to-green-50 p-8">
                <div className="max-w-screen-md md:mx-auto">
                    {children}
                </div>
            </div>
        </main>
    )
}