export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      {children}
    </main>
  );
}
