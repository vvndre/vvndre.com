export default function NotFound() {
  const Text = () => {
    return (
      <div className="relative h-screen place-content-center bg-dark-void">
        <h6 className="text-center text-6xl font-black text-snow-white">404</h6>
        <br />
        <p className="text-center text-dusty-gray">Page not found</p>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden">
      <Text />
    </div>
  );
}
