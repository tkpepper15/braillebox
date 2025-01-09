'use client';

import { FC } from 'react';
import Navbar from 'app/navbar';
import Footer from 'app/footer';
import '/app/global.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface DocsPageProps {}

const DocsPage: FC<DocsPageProps> = () => {
  // First, let's define a custom underline style class in the component
  const orangeUnderlineClass = "border-b-2 border-[#d4843e] pb-0.5"; // Same orange as code blocks

  return (
    <div className="min-h-screen bg-stone-950 text-gray-200">
      <Navbar />
      <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="space-y-12">
            {/* Title section */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                The Making of Brailliant
              </h1>
              <p className="text-lg leading-relaxed orange">
                A Technical Walk-Through with Richard Shan
              </p>
            </div>

            <div className="text-center my-8">
                <img
                  src="../../pics/docs_pic.png"
                  alt="Modified design"
                  width={700}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>

            {/* Overview section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">Preface</h2>
              <p className="text-lg leading-relaxed">
                The goal is to create a <span className={orangeUnderlineClass}>3x2 solenoid array</span> that can display braille characters by
                pushing solenoids up and down to create dots. This solenoid array will be
                connected to a <span className={orangeUnderlineClass}>Raspberry Pi</span>, which in turn will be connected to an <span className={orangeUnderlineClass}>ESP32CAM</span>.
                The camera will take a picture of a page of text, then perform <span className={orangeUnderlineClass}>OCR</span> (optical
                character recognition) to extract a string of text from the image. That
                string of text will be converted to braille, which will be displayed on the
                solenoid array by flashing each character for 1 second at a time. This
                device will essentially allow for live-time conversion of any text into
                braille, which I hope will increase accessibility to books and the like.
              </p>
            </section>

            {/* Brainstorming Process section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">Brainstorming Process</h2>
              <h3 className="text-2xl font-semibold white">Initial Thoughts</h3>
              <p className="text-lg leading-relaxed">
                My idea was to design a text to braille converter, which a blind person
                could use by moving the device over a page of text to convert it into
                braille. The braille translation of the English text would then be
                represented via a series of up/down pins which the user could use to
                interpret the information. The device was to be a rectangular box that would
                use an internal camera to interpret and OCR text, which could then be
                translated into braille and displayed via a series of servo motors pushing
                up metal rods on the top of the box. The pins would be in groups of six,
                each group representing a single braille character.
              </p>

              <p className="text-lg leading-relaxed">
                However, I talked to <strong>Stuart Christhilf</strong> who had thought of a
                similar mechanism for his initial final project. He originally planned to
                create a dynamic clock to display the time using blocks of wood that could
                be pushed out or pulled back via servos. However, when building his project,
                he realized that fitting so many servos into such a small space was
                completely unfeasible and warned me from doing the same. My initial design
                is shown in the following image:
              </p>

              <div className="text-center my-8">
                <img
                  src="../../pics/week1/initialDesign.jpg"
                  alt="Initial design"
                  width={450}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>

              <p className="text-lg leading-relaxed">
                I then decided to use electromagnets for my pins, instead of a servo.
                The pins themselves would be a small magnetic rod sitting on top of an
                electromagnet. The small electromagnet could be powered on and off via a
                microcontroller...
              </p>

              <div className="text-center my-8">
                <img
                  src="../../pics/week1/modifiedDesign.jpg"
                  alt="Modified design"
                  width={700}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </section>

            {/* Significant Changes section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Significant Changes</h3>
              <p className="text-lg leading-relaxed">
                Although a large part of my project remains the same, I&apos;ve changed some 
                aspects of my project. Namely, I&apos;ve decided to use a Raspberry Pi as a 
                central controller and connect it to 5 separate ATTiny412 chips, which will 
                each be responsible for controlling 6 electromagnets to represent 1 braille 
                character. Each ATTiny412 and 6 electromagnet setup will be on its own PCB, 
                and receive data from the controlling Raspberry Pi.
              </p>
              <p className="text-lg leading-relaxed">
                Additionally, I decided to create an elevated case for the ESP32 camera so
                that the image would have a better angle and thus an easier time being
                processed for OCR, and so that more light could come into the camera lens from
                the unobstructed sides. Lastly, I decided I wanted to wirelessly transmit data
                from the ESP32 camera to the Raspberry Pi for processing. I worked with both
                serial communication and WiFi connectivity previously so I hope to sum it all
                together and wirelessly transmit data between these two controllers.
              </p>
              <p className="text-lg leading-relaxed">
                Here is an updated system diagram which maps out all the parts of my project:
              </p>
              <div className="text-center my-8">
                <img 
                  src="../../pics/final/midterm/systemDiagram.jpg" 
                  width={700}
                  alt="System diagram showing project components"
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </section>

            {/* Feasibility section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Feasibility</h3>
              <p className="text-lg leading-relaxed">
                However, after doing research, I realized that having 30 solenoids would be
                unfeasible. Instead, I decided to scale my project down to just having 6
                solenoids, as this would still accomplish the mission of displaying braille
                for a reader. I would then flash each braille character for 1 second on the
                6 solenoid array. This change allows me to worry less about power budget and
                ensures that I have a ready final project on my presentation date.
              </p>
            </section>

            {/* Bill of Materials section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">Bill of Materials</h2>
              <div className="text-center">
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlIJdCFYQU6-XJm1FrXhk5twaGxpRf5jiNvo1Z9Wf0MkVefTB23N4_w5QmfgFJcqXeWUzttINugkhU/pubhtml?widget=true&chrome=false&headers=false"
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                  height={300}
                  frameBorder={0}
                  scrolling="no"
                />
              </div>
            </section>

            {/* Components section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">The Build</h2>
              
              {/* Brailliant CAD subsection */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Initial Design</h3>
                {/* Continue with content... */}
              </section>

              {/* Initial Design subsection */}
              <section className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I decided to first model my design in Fusion360, as I had prior experience
                  working with Fusion and was pretty comfortable using it. When I started out
                  with Autodesk Fusion, Kevin Kennedy&apos;s{" "}
                  <a 
                    href="https://www.youtube.com/playlist?list=PLrZ2zKOtC_-C4rWfapgngoe9o2-ng8ZBr"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <strong>Fusion tutorials</strong>
                  </a>{" "}
                  were a massive help.
                </p>

                <p className="text-lg leading-relaxed">
                  I first started off with a rectangular prism to act as the main body of the
                  design.
                </p>

                <div className="text-center my-8">
                  <img
                    src="../../pics/week2/rectangularPrism.jpg"
                    alt="Rectangular Prism Creation"
                    width={700}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>

                <p className="text-lg leading-relaxed">Next, I filleted the box to round out the edges.</p>

                <div className="text-center my-8">
                  <img 
                    src="../../pics/week2/fillet.jpg" 
                    alt="Fillet Creation" 
                    width={700}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>

                {/* Add missing CAD process images */}
                <p className="text-lg leading-relaxed">
                  I then created a sketch on the top of the box, where I created six circles.
                  These 6 circles represent the holes where I will put metal pins into that
                  can pop up and down depending on what needs to be represented.
                </p>

                <div className="text-center my-8">
                  <img
                    src="../../pics/week2/holeSketch.jpg"
                    alt="Sketching the circles"
                    width={700}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>

                <p className="text-lg leading-relaxed">
                  I extruded the circles downward as holes. This creates the actual space
                  where the pins will be placed.
                </p>

                <div className="text-center my-8">
                  <img
                    src="../../pics/week2/holeExtrude.jpg"
                    alt="Extruding the holes"
                    width={500}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>

                {/* Add PyTesseract section */}
                <section className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">PyTesseract</h3>
                  <p className="text-lg leading-relaxed">
                    After activating the virtual environment, I can install all of my library
                    dependencies.
                  </p>

                  <div className="my-8 rounded-lg overflow-hidden bg-gray-900/50">
                    <SyntaxHighlighter 
                      language="bash" 
                      style={{
                        ...atomDark,
                        'pre[class*="language-"]': {
                          ...atomDark['pre[class*="language-"]'],
                          background: '#2d2d2d'
                        },
                        'code[class*="language-"]': {
                          ...atomDark['code[class*="language-"]'],
                          color: '#d4843e'  // Duller orange color
                        }
                      }}
                    >
                      {
`sudo pip install pytesseract
sudo pip install opencv-python`
                    }
                    </SyntaxHighlighter>
                  </div>

                  <p className="text-lg leading-relaxed">
                    I then created the actual program that the Raspberry Pi would run.
                  </p>

                  <div className="my-8 rounded-lg overflow-hidden bg-gray-900">
                    <SyntaxHighlighter 
                      language="python" 
                      style={atomDark}
                      showLineNumbers
                    >
                      {
`import time
import cv2
import urllib.request
import numpy as np
import pytesseract

url = 'http://10.12.28.193/capture'

img_resp = urllib.request.urlopen(url)
imgnp = np.array(bytearray(img_resp.read()), dtype=np.uint8)
frame = cv2.imdecode(imgnp, -1)

text = pytesseract.image_to_string(frame, config='--psm 7')

print("Extracted Text:", text)
time.sleep(1)`
                    }
                    </SyntaxHighlighter>
                  </div>
                </section>

                {/* Add more CAD process images and descriptions */}
              </section>

              {/* Raspberry Pi Box CAD section */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Raspberry Pi Box CAD</h3>
                <p className="text-lg leading-relaxed">
                  I first started off with a shelled box.
                </p>

                <div className="text-center my-8">
                  <img 
                    src="../../pics/final/rpibox/rpbshelledbox.jpg" 
                    width={500}
                    alt="Initial shelled Raspberry Pi box"
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              </section>

              {/* Electronics section */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Electronics</h3>
                <p className="text-lg leading-relaxed">
                  Electronics were by far the worst part of this project, at least for me. The
                  main issue was that I didn&apos;t understand transistors very well, and I ran
                  into a bunch of problems with them. The two main problems I ran into were
                  transistors not being able to handle the power and transistors having
                  inconsistent pinouts and being backwards or jumbled around.
                </p>

                <div className="text-center my-8">
                  <img 
                    src="../../pics/final/pcb/mosfet.jpg"
                    width={500}
                    alt="MOSFET integration"
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>

                <p className="text-lg leading-relaxed">
                  I first tried using a <span className={orangeUnderlineClass}>TIP120 transistor</span>, but it couldn&apos;t handle the power
                  requirements of the solenoid. I then switched to an <span className={orangeUnderlineClass}>IRF520 MOSFET</span>, which worked
                  much better. However, I still had issues with the pinouts being different than
                  what I expected.
                </p>

                <div className="text-center my-8">
                  <img 
                    src="../../pics/final/pcb/mosfetModule.jpg"
                    width={500}
                    alt="MOSFET Module"
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>

                <p className="text-lg leading-relaxed">
                  After fixing the pinout issues, I created a simple test circuit with an <span className={orangeUnderlineClass}>Arduino
                  Uno</span> to verify that the <span className={orangeUnderlineClass}>MOSFET</span> could properly control the solenoid. The circuit
                  consisted of:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-lg">
                  <li>12V power supply for the solenoid</li>
                  <li>IRF520 MOSFET</li>
                  <li>Solenoid connected to drain</li>
                  <li>Arduino digital pin connected to gate through a 220Ω resistor</li>
                  <li>Common ground between Arduino and power supply</li>
                </ul>

                <p className="text-lg leading-relaxed">
                  Once I confirmed the circuit worked, I designed a PCB that would hold six of
                  these circuits - one for each solenoid in the braille array. The PCB also
                  includes:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-lg">
                  <li>Power distribution for the 12V supply</li>
                  <li>ATTiny1614 microcontroller</li>
                  <li>Programming headers for the ATTiny</li>
                  <li>Terminal blocks for solenoid connections</li>
                </ul>

                <div className="text-center my-8">
                  <img 
                    src="../../pics/final/pcb/final.jpg"
                    width={500}
                    alt="Final PCB assembly"
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              </section>
            </section>

            {/* Software Integration section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">Software Integration</h2>
              
              {/* Camera Feed OCR subsection */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Camera Feed OCR</h3>
                <p className="text-lg leading-relaxed">
                  I had previously setup infrastructure to wirelessly transmit a command to
                  capture an image from a Raspberry Pi to the ESP32CAM, along with sending the
                  image data back over the network and saving it. I had created a WebSocket
                  server to accept commands and then send the image data over HTTP back to the
                  Raspberry Pi.
                </p>

                <p className="text-lg leading-relaxed">
                  The ESP32CAM is pointed towards a paper with the words &ldquo;Hello World!&rdquo;. In
                  the right side of the picture, the Raspberry Pi which is running the code is
                  visible along with the display. Upon running the program on the Pi&apos;s
                  terminal, the ESP32CAM takes a picture and transmits it to the Pi, which
                  then uses tesseract to perform OCR on it and prints out the extracted text.
                </p>

                <div className="text-center my-8">
                  <video 
                    width={550} 
                    height={300} 
                    controls
                    className="rounded-lg shadow-lg mx-auto"
                  >
                    <source src="../../pics/week15/pi.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>

              {/* ESP32CAM Wireless Transmission subsection */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">ESP32CAM Wireless Transmission</h3>
                <p className="text-lg leading-relaxed">
                  WebSocket connections are initiated through HTTP protocol, using an upgrade
                  request from HTTP to WebSocket. This begins with a client sending a standard
                  HTTP request that includes an &ldquo;Upgrade: websocket&rdquo; header and a &ldquo;Connection:
                  Upgrade&rdquo; header to the server. The server then responds with an HTTP 101
                  status code, indicating that the protocol will change, thus establishing the
                  WebSocket connection.
                </p>

                <div className="my-8 rounded-lg overflow-hidden bg-gray-900">
                  <SyntaxHighlighter 
                    language="cpp" 
                    style={atomDark}
                    showLineNumbers
                  >
                    {`// Add the WebSocket server code here
// Include the connection handling and data transmission`}
                  </SyntaxHighlighter>
                </div>
              </section>

              {/* GPT4o and Base64 Processing subsection */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">GPT4o and Base64 Processing</h3>
                <p className="text-lg leading-relaxed">
                  At this point, I wanted to try to use as little computational power as
                  possible, and thus decided to switch to processing my image in <span className={orangeUnderlineClass}>base64</span>.
                  Although switching to base64 ultimately failed to scale down the computing
                  enough to run on a microcontroller, it still led me in an interesting
                  direction: that I could use <span className={orangeUnderlineClass}>GPT4o&apos;s multimodal capabilities</span> as an OCR
                  engine to extract text from the base64 image. GPT4o in general is much more
                  accurate in OCR than pytesseract, hence the switch.
                </p>

                <div className="my-8 rounded-lg overflow-hidden bg-gray-900/50">
                  <SyntaxHighlighter 
                    language="cpp" 
                    style={{
                      ...atomDark,
                      'pre[class*="language-"]': {
                        ...atomDark['pre[class*="language-"]'],
                        background: '#2d2d2d'
                      },
                      'code[class*="language-"]': {
                        ...atomDark['code[class*="language-"]'],
                        color: '#d4843e'  // Duller orange color
                      }
                    }}
                    showLineNumbers
                    className="text-sm"
                  >
                    {
`static esp_err_t jpg_base64_handler(httpd_req_t *req) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
      Serial.println("Camera capture failed");
      httpd_resp_send_500(req);
      return ESP_FAIL;
  }

  // Encode the frame in base64
  String base64Image = base64::encode(fb->buf, fb->len);

  // Send the base64 encoded image
  httpd_resp_set_type(req, "text/plain");
  esp_err_t res = httpd_resp_send(req, base64Image.c_str(), base64Image.length());

  // Return the frame buffer
  esp_camera_fb_return(fb);

  return res;
}

                  }`
                    }
                  </SyntaxHighlighter>
                </div>

                <div className="text-center my-8">
                  <img 
                    src="../../pics/week15/4oJson.jpg" 
                    width={750} 
                    alt="GPT4o JSON response output"
                    className="rounded-lg shadow-lg mx-auto" 
                  />
                </div>
              </section>

              {/* Text to Braille Mapping subsection */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Text to Braille Mapping</h3>
                <p className="text-lg leading-relaxed">
                  The Raspberry Pi sends a byte-encoded text string to the ATTiny1614. From
                  there, the ATTiny1614 is responsible for interpreting and converting the
                  received text into braille dot arrays, which it then shows on the 3x2 array.
                </p>

                <div className="my-8 rounded-lg overflow-hidden bg-gray-900">
                  <SyntaxHighlighter 
                    language="cpp" 
                    style={atomDark}
                    showLineNumbers
                    className="text-sm"
                  >
                    {
`/*
 Solenoid arrangement:
0 1
2 3
4 5
*/

int sols[6] = {0, 1, 2, 3, 9, 8}; // Define the pins connected to the solenoids

// Define the Braille arrays
int a[6] = {0, 1, 1, 1, 1, 1};
int b[6] = {0, 1, 0, 1, 1, 1};
int c[6] = {0, 0, 1, 1, 1, 1};
// ... more letter definitions ...

typedef struct {
char character;
int *braille_array;
} BrailleMap;

BrailleMap braille_dictionary[] = {
{'a', a}, {'b', b}, {'c', c}, {'d', d}, {'e', e},
{'f', f}, {'g', g}, {'h', h}, {'i', i}, {'j', j},
// ... more mappings ...
};`
                    }
                  </SyntaxHighlighter>
                </div>
              </section>
            </section>

            {/* Assembly section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">Assembly</h2>
              <p className="text-lg leading-relaxed">
                I first outlined the general setup of my final project. I secured each
                <span className={orangeUnderlineClass}>MOSFET</span> to a corresponding battery pack and solenoid, and color-coded each
                MOSFET&apos;s trigger and GND wires. I organized them in such a way that toggling
                solenoid 1, 2, 3, 4, 5, then 6 would control each solenoid in a line.
              </p>

              <div className="gap-6 my-8">
                <div className="text-center">
                  <video 
                    controls
                    width={700}
                    preload="none"
                    poster="../../pics/final/assembly/internal.jpg"
                    className="rounded-lg shadow-lg mx-auto bg-cover"
                    style={{
                      objectFit: 'cover',
                      backgroundColor: '#1a1a1a'
                    }}
                  >
                    <source 
                      src="../../pics/final/assembly/solenoidsWorking.mp4" 
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                The assembly of the Raspberry Pi case is relatively simple. As the 3D print
                already has holes built in for USB wires, and a hole built in for the
                screen, all I really need to do is secure the Pi to the bottom and the
                screen to the top, then connect the wires.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="text-center">
                  <img 
                    src="../../pics/final/assembly/piCaseIntegrated.jpg" 
                    width={400}
                    alt="Raspberry Pi case assembly with screen and connections" 
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
                <div className="text-center">
                  <img 
                    src="../../pics/final/assembly/piCase.jpg" 
                    width={400}
                    alt="Completed Raspberry Pi case" 
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              </div>
            </section>

            {/* Implications section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">Wrap Up</h2>
              <p className="text-lg leading-relaxed">
                There is existing technologies on the market that can convert text to
                braille in real time, but those are often expensive and not readily
                available to the public. My hope with this project is to create a product
                that can be cheaply produced and reach a wide audience.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-lg">
                <li>
                  Some parts of a project will take longer while others will take shorter
                  than expected.
                </li>
                <li>Double the planned allocation of time due to errors and debugging</li>
                <li>
                  Working with lower-level hardware and software is more rewarding and often
                  produces a more solid product
                </li>
                <li>
                  There are many types of transistors, which can be a pain to sort through
                </li>
              </ul>
            </section>

            {/* Final Product section */}
            <section className="space-y-6">
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 my-8">
                <p className="font-bold">
                  WARNING: The project video and slide (poster) are out of date and provide
                  incorrect information about licensing. The current EULA is{" "}
                  <a href="../license.txt" className="text-blue-400 hover:text-blue-300">
                    here
                  </a>. By installing, accessing, or using the Product, you acknowledge 
                  that you have read this Agreement, understand it, and agree to be bound 
                  by its terms and conditions.
                </p>
              </div>
            </section>

            {/* File Downloads section */}
            <section className="space-y-6">
              <h2 className="text-4xl font-bold orange">File Downloads</h2>
              <p className="text-lg leading-relaxed">
                My files can be downloaded{" "}
                <a href="../../files/final/final.zip" className="text-blue-400 hover:text-blue-300">
                  <strong>here</strong>
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  );
};

export default DocsPage; 