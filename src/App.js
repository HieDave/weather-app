

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="relative min-h-screen lg:col-span-2 bg-gray-300">
        <span className="absolute top-5 left-10 lg:top-10 lg:left-20 text-lg font-bold">
          Weatherly
        </span>
        <div className="absolute flex flex-wrap items-center bottom-[136px] left-10 lg:bottom-[144px] lg:left-20">
          <div className="text-6xl lg:text-8xl">
            26°
          </div>
          <div className="mr-3 lg:ml-4">
            <div className="text-2xl  lg:text-4xl">London</div>
            <div>10:36 - Tuesday, 22 Oct '19</div>
          </div>
        </div>
      </div>

      {/* search section */}

      <div className="lg:col-span-1 lg:h-full bg-gray-100 p-8 md:p-12">
        
        <input 
          type="text" 
          className="w-full p-2 text-gray-900 bg-inherit border-b-[1px] border-gray-300 focus:border-blue-500 focus:outline-0"
          placeholder="Search City..."
        />
        <span className="block mt-10">Birmingham</span>
        <span className="block mt-6">Birmingham</span>
        <span className="block mt-6">Birmingham</span>
        <span className="block mt-6">Birmingham</span>

        <hr className="my-10"/>
        <div>Weather Details</div>
        <div className="flex items-center justify-between mt-10">
          <span>
            Cloudy
          </span>
          <span>
            12%
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span>
            Humidity
          </span>
          <span>
            78%
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span>
            Wind
          </span>
          <span>
            1km/h
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span>
            Rain
          </span>
          <span>
            0mm
          </span>
        </div>
        <hr className="mt-10"/>
      </div>
    </div>
  );
}

export default App;
