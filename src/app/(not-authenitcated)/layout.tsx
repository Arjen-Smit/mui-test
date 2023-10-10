export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Logged In</h1>
      {children}
    </>
  )
}
