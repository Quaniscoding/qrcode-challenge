import './App.css';
import imageqrcode from './assets/imageqrcode.jpg'
function App() {
  return (
    <div style={{ backgroundColor: "#d5e1ef", height: "100vh" }} className="flex justify-center items-center center overflow-y-scroll">
      <div className="rounded-sm">
        <div className='p-2 bg-white rounded-2xl'>
          <div className='flex justify-center items-center' >
            <img src={imageqrcode} className="w-48 rounded-2xl" />
          </div>
          <div className='flex justify-center items-center flex-col' >
            <h3 className='font-bold pt-4' style={{ fontSize: "15px" }}>Improve your front-end </h3>
            <h3 className='font-bold pb-3' style={{ fontSize: "15px" }}>skills by building project</h3>
          </div>
          <div className='flex items-center flex-col'>
            <p className='font-normal text-gray-500' style={{ fontSize: "10px" }} >Scan the QR code to visist Frontend </p>
            <p className='font-normal text-gray-500' style={{ fontSize: "10px" }}>
              Mentor and take your codeding skills to
            </p>
            <p className='font-normal text-gray-500 pb-3' style={{ fontSize: "10px" }}> the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
