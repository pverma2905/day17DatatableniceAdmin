export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${opensans.className} ${nunito.className} ${poppins.className}`}>
                {children}

            </body>
        </html>
    )
}