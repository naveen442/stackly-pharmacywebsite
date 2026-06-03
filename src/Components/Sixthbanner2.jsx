import heroBg from "../assets/Images/sixth_single_images.png";

export default function Sixthbanner2() {
  return (
    <div className="w-full px-4 py-4">
      <div className="max-w-screen-xl mx-auto overflow-hidden rounded-xl" style={{ maxHeight: 420 }}>
        <img
          src={heroBg}
          alt="Hero banner"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: 420 }}
        />
      </div>
    </div>
  );
}
