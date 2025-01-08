import Navbar from 'app/navbar';
import '/app/global.css';

// First, install and import the syntax highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DocsPage = () => {
 return (
   <div className="min-h-screen bg-stone-950">
     <Navbar />
     <div className="container mx-auto px-4 py-16">
       {/* Content starts here */}
       <h1 id="braillebox-conrad-spirit-of-innovation-challenge">
         BrailleBox - Conrad Spirit of Innovation Challenge
       </h1>
        
        <div className="text-center">
          <img
            src="../../pics/final/braillebox/bbwirehole.jpg"
            width={500}
            alt="Wire hole design for ATTiny connections"
          />
        </div>

        <div className="text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="../../pics/final/rpibox/rpbwirehole.jpg"
                    width={500}
                    alt="Front wire hole design"
                  />
                </td>
                <td>
                  <img
                    src="../../pics/final/rpibox/rpbwirehole2.jpg"
                    width={500}
                    alt="Side wire hole design"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 id="braillebox-conrad-spirit-of-innovation-challenge">
          BrailleBox - Conrad Spirit of Innovation Challenge
        </h1>
        <p>
          <strong>
            WARNING: The project video and slide (poster) are out of date and provide
            incorrect information about licensing. The current EULA is{" "}
            <a href="../LICENSE.txt">here</a>. By installing, accessing, or using the
            Product, you acknowledge that you have read this Agreement, understand it,
            and agree to be bound by its terms and conditions.
          </strong>
        </p>
        <h2 id="overview">Overview</h2>
        <p>
          I want to create a 3x2 solenoid array that can display braille characters by
          pushing solenoids up and down to create dots. This solenoid array will be
          connected to a Raspberry Pi, which in turn will be connected to an ESP32CAM.
          The camera will take a picture of a page of text, then perform OCR (optical
          character recognition) to extract a string of text from the image. That
          string of text will be converted to braille, which will be displayed on the
          solenoid array by flashing each character for 1 second at a time. This
          device will essentially allow for live-time conversion of any text into
          braille, which I hope will increase accessibility to books and the like.
        </p>
        <h2 id="brainstorming-process">Brainstorming Process</h2>
        <h3 id="initial-thoughts">Initial Thoughts</h3>
        <p>
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
        <p>
          However, I talked to <strong>Stuart Christhilf</strong> who had thought of a
          similar mechanism for his initial final project. He originally planned to
          create a dynamic clock to display the time using blocks of wood that acould
          be pushed out or pulled back via servos. However, when building his project,
          he realized that fitting so many servos into such a small space was
          completely unfeasible and warned me from doing the same. My initial design
          is shown in the following image:
        </p>
        <div className="text-center">
          <img
            src="../../pics/week1/initialDesign.jpg"
            alt="Initial design"
            width={450}
          />
        </div>
        <br />I then decided to use electromagnets for my pins, instead of a servo.
        The pins themselves would be a small magnetic rod sitting on top of an
        electromagnet. The small electromagnet could be powered on and off via a
        microcontroller. When the electromagnet was off, the pin would simply rest on
        top of the electromagnet, and the pin would be flush against the top of the
        board, forming the down position of the pin. If the pin needed to pop up, the
        microcontroller would power the electromagnet which would then emit a
        repelling magnetic charge. That magnetic force would then repel the pin
        slightly upwards, forming the up position of the pin. To represent a braille
        character, the microcontroller would push the specific pins into the up
        position that together would form the 6-dot pattern of the character. I also
        decided to move the camera out of the box. That would allow for more simple
        wiring and internal organization of the box, and allow the operator to more
        easily use the device. Moving the camera out means that the user would only
        need to move a small camera container across the page of text, instead of
        dragging the entire device. Here is my modified design:
        <div className="text-center">
          <img
            src="../../pics/week1/modifiedDesign.jpg"
            alt="Modified design"
            width={700}
          />
        </div>
        <br />
        ### Significant Changes Although a large part of my project remains the same,
        I&apos;ve changed some aspects of my project. Namely, I&apos;ve decided to use a
        Raspberry Pi as a central controller and connect it to 5 separate ATTiny412
        chips, which will each be responsible for controlling 6 electromagnets to
        represent 1 braille character. Each ATTiny412 and 6 electromagnet setup will
        be on its own PCB, and receive data from the controlling Raspberry Pi.
        Additionally, I decided to create an elevated case for the ESP32 camera so
        that the image would have a better angle and thus an easier time being
        processed for OCR, and so that more light could come into the camera lens from
        the unobstructed sides. Lastly, I decided I wanted to wirelessly transmit data
        from the ESP32 camera to the Raspberry Pi for processing. I worked with both
        serial communication and WiFi connectivity previously so I hope to sum it all
        together and wirelessly transmit data between these two controllers. Here is
        an updated system diagram which maps out all the parts of my project.
        <div className="text-center">
          <img src="../../pics/final/midterm/systemDiagram.jpg" width={700} />
        </div>
        <h3 id="feasibility">Feasibility</h3>
        <p>
          However, after doing research, I realized that having 30 solenoids would be
          unfeasible. Instead, I decided to scale my project down to just having 6
          solenoids, as this would still accomplish the mission of displaying braille
          for a reader. I would then flash each braille character for 1 second on the
          6 solenoid array. This change allows me to worry less about power budget and
          ensures that I have a ready final project on my presentation date.
        </p>
        <h2 id="bill-of-materials">Bill of Materials</h2>
        <div style={{ textAlign: "center" }}>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlIJdCFYQU6-XJm1FrXhk5twaGxpRf5jiNvo1Z9Wf0MkVefTB23N4_w5QmfgFJcqXeWUzttINugkhU/pubhtml?widget=true&chrome=false&headers=false"
            frameBorder={0}
            width="250%"
            height={300}
            scrolling="no"
          />
        </div>
        <h2 id="components">Components</h2>
        <h3 id="braille-box-cad">Braille Box CAD</h3>
        <h4 id="initial-design">Initial Design</h4>
        <p>
          I decided to first model my design in Fusion360, as I had prior experience
          working with Fusion and was pretty comfortable using it. When I started out
          with Autodesk Fusion, Kevin Kennedy&apos;s{" "}
          <a href="https://www.youtube.com/playlist?list=PLrZ2zKOtC_-C4rWfapgngoe9o2-ng8ZBr">
            <strong>Fusion tutorials</strong>
          </a>{" "}
          were a massive help.
        </p>
        <p>
          I first started off with a rectangular prism to act as the main body of the
          design.
        </p>
        <div className="text-center">
          <img
            src="../../pics/week2/rectangularPrism.jpg"
            alt="Rectangular Prism Creation"
            width={700}
          />
        </div>
        <p>Next, I filleted the box to round out the edges.</p>
        <div className="text-center">
          <img src="../../pics/week2/fillet.jpg" alt="Fillet Creation" width={700} />
        </div>
        <p>
          I then created a sketch on the top of the box, where I created six circles.
          These 6 circles represent the holes where I will put metal pins into that
          can pop up and down depending on what needs to be represented.
        </p>
        <div className="text-center">
          <img
            src="../../pics/week2/holeSketch.jpg"
            alt="Sketching the circles"
            width={700}
          />
        </div>
        <p>
          I extruded the circles downward as holes. This creates the actual space
          where the pins will be placed.
        </p>
        <div className="text-center">
          <img
            src="../../pics/week2/holeExtrude.jpg"
            alt="Extruding the holes"
            width={500}
          />
        </div>
        <p>
          Finally, I used the pattern feature to repeat the sketch and extrusion
          across the top of the box. This created a total of 5 evenly spaced sets of 6
          pins. With each set of 6 pins representing a single braille character, one
          iteration of pin setups can represent five letters.
        </p>
        <div className="text-center">
          <img
            src="../../pics/week2/pattern.jpg"
            alt="Patterning the holes"
            width={700}
          />
        </div>
        <h4 id="improved-design">Improved Design</h4>
        <p>
          As I had made my initial design early on, it did not reflect the changes I
          had made to my final project, most notably scaling down the amount of
          solenoids from 5 arrays of 3x2 to one 3x2 array. Additionally, when I made
          the original design, I didn&apos;t think much about how I would power the
          solenoid array and thus didn&apos;t include any spots for batteries. I also
          wanted to make the holes for the solenoids on a separate press-fit cover on
          top of the main box. Finally, the original design doesn&apos;t include any
          internal parts to hold the solenoids in place.
        </p>
        <p>For my new design, I want to make the following key changes:</p>
        <ul>
          <li>3x2 solenoid array</li>
          <li>Internal beams to support solenoids</li>
          <li>Battery pack holders</li>
          <li>Press-fit cover</li>
        </ul>
        <p>
          Additionally, I want the box to look as nice as possible and ideally have
          all wiring contained within it.
        </p>
        <p>
          I first started out by creating the shell of the box. I hollowed out the
          innards because I want my electronics to be inside. I will end up adhering
          my PCB to the side of the box and having my MOSFET breakouts on the bottom
          of the hollowed inside.
        </p>
        <div className="text-center">
          <img src="../../pics/final/braillebox/bbshell.jpg" width={700} />
        </div>
        <p>
          I then started working on the top cover. I started out with creating a
          sketch where all my holes would be, and a offset on the edges to match the
          shell. I then extruded the sketch to create the cover with holes that the
          solenoids will fill.
        </p>
        <div className="text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img src="../../pics/final/braillebox/bbholes1.jpg" width={500} />
                </td>
                <td>
                  <img src="../../pics/final/braillebox/bbholes2.jpg" width={700} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Based on my previous sketch offset for the edges of the shell box, I created
          quarter-circles and extruded them to form the press-fit lid.
        </p>
        <div className="text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="../../pics/final/braillebox/bbpressfit1.jpg"
                    width={350}
                  />
                </td>
                <td>
                  <img
                    src="../../pics/final/braillebox/bbpressfit2.jpg"
                    width={700}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Next, I designed the beams that hold the solenoids in place. I started by
          creating a sketch on the bottom of the shell box and extruded that to my
          desired height. I then created a sketch on the extruded rectangular prism to
          remove the bottom part of it and form it into a beam-like shape.
        </p>
        <div className="text-center">
          <table>
            <tbody>
              <tr height="150%">
                <td>
                  <img src="../../pics/final/braillebox/bbbeams1.jpg" width={500} />
                </td>
                <td>
                  <img src="../../pics/final/braillebox/bbbeams2.jpg" width={700} />
                </td>
                <td>
                  <img src="../../pics/final/braillebox/bbbeams3.jpg" width={700} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          I then started work on the battery holders. I created the bottom of the
          battery holder then extruded out the sides.
        </p>
        <div className="text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="../../pics/final/braillebox/bbbatterybottom.jpg"
                    width={600}
                  />
                </td>
                <td>
                  <img
                    src="../../pics/final/braillebox/bbbatteryshelled.jpg"
                    width={500}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Next, I created the dividers to firmly hold each battery pack in place. Each
          divided section has the same length and width dimensions as the actual
          battery pack that I will use, plus a little for tolerance.
        </p>
        <div className="text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="../../pics/final/braillebox/bbbatterydividersketch.jpg"
                    width={500}
                    alt="Battery divider sketch design"
                  />
                </td>
                <td>
                  <img
                    src="../../pics/final/braillebox/bbbatterydivided.jpg"
                    width={500}
                    alt="Divided battery compartment design"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          I then added a small hole on the side for the power, ground, and TX/RX
          cables for the ATTiny1614.
        </p>
        <div className="text-center">
          <img 
            src="../../pics/final/braillebox/bbwirehole.jpg" 
            width={500} 
            alt="Wire hole design for ATTiny connections"
          />
        </div>
        <p>
          Next, I extruded a small hole as a slot for the wires on the external
          battery packs to route into the main shell box, where it will be connected
          to the MOSFETs controlling the solenoids.
        </p>
        <div className="text-center">
          <img 
            src="../../pics/final/braillebox/bbbatterywireslot.jpg" 
            width={500} 
            alt="Battery wire slot design"
          />
        </div>
        <p>Finally, I added fillets. Here is the final box design.</p>
        <div className="text-center">
          <img 
            src="../../pics/final/braillebox/bbfillets.jpg" 
            width={500} 
            alt="Final box design with fillets"
          />
        </div>
        <h3 id="raspberry-pi-box-cad">Raspberry Pi Box CAD</h3>
        <p>I first started off with a shelled box.</p>
        <div className="text-center">
          <img 
            src="../../pics/final/rpibox/rpbshelledbox.jpg" 
            width={500} 
            alt="Initial shelled Raspberry Pi box"
          />
        </div>
        <p>
          I then added a lid, with a hole the same size as my 5 inch touchscreen where
          I would attach the screen.
        </p>
        <div className="text-center">
          <img 
            src="../../pics/final/rpibox/rpblid.jpg" 
            width={500} 
            alt="Raspberry Pi box lid with screen hole"
          />
        </div>
        <p>
          Next, I added screw holes on the lid. These screw holes allowed me to secure
          the screen to the 3D printed lid. Unfortunately, my screw holes actually
          ended up being a little small so I had to enlarge them after the print with
          the help of a soldering iron.
        </p>
        <div className="text-center">
          <img 
            src="../../pics/final/rpibox/rpblidscrewholes.jpg" 
            width={500}
            alt="Raspberry Pi box lid screw holes"
          />
        </div>
        <p>I added legs to the lid to allow it to press-fit into the base.</p>
        <div className="text-center">
          <img src="../../pics/final/rpibox/rpblegs.jpg" width={500} alt="Raspberry Pi box with legs" />
        </div>
        <p>Then, I added holes for wires on the front and side of the Pi case.</p>
        <div className="text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img 
                    src="../../pics/final/rpibox/rpbwirehole.jpg" 
                    width={500} 
                    alt="Front wire hole design for Pi case"
                  />
                </td>
                <td>
                  <img 
                    src="../../pics/final/rpibox/rpbwirehole2.jpg" 
                    width={500} 
                    alt="Side wire hole design for Pi case"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Finally, I added fillets all around.</p>
        <div className="text-center">
          <img 
            src="../../pics/final/rpibox/rpbfillets.jpg" 
            width={500}
            alt="Raspberry Pi box with fillets"
          />
        </div>
        <p>
          After printing that initial iteration, the screen fit and there was enough
          space inside to fit the Raspberry Pi. However, some of my cables didn&apos;t fit
          as they had long "necks" that had to remain straight. As such, I would have
          to significantly bend the HDMI and USB cords for the Raspberry Pi.
        </p>
        <div className="text-center">
          <img 
            src="../../pics/final/rpibox/rpbusbneck.jpg" 
            width={500}
            alt="USB cable neck clearance issue"
          />
        </div>
        <p>
          As such, I adjusted the length of the box to give space for the USB cable
          necks. I also slightly decreased the height of the holes for the USB cables
          as they were larger than necessary and somewhat an eyesore.
        </p>
        <div className="text-center">
          <img 
            src="../../pics/final/rpibox/rpbsizeAdjustments.jpg" 
            width={500}
            alt="Box size adjustments for cable clearance"
          />
        </div>
        <h3 id="electronics">Electronics</h3>
        <p>
          Electronics were by far the worst part of this project, at least for me. The
          main issue was that I didn&apos;t understand transistors very well, and I ran
          into a bunch of problems with them. The two main problems I ran into were
          transistors not being able to handle the power and transistors having
          inconsistent pinouts and being backwards or jumbled around.
        </p>
        <p>
          In this section, I&apos;ll go through a few of the boards that didn&apos;t work then
          show my final board.
        </p>
        <p>
          This was my initial board design. I tested this board by plugging a solenoid
          into the top pin, and the resulting lack of transistor is visible. The
          transistor heated up after around 5 seconds and fell off the board, without
          powering the solenoid.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/sight1.jpg" width={500} />
        </div>
        <p>
          This is my second iteration. I added what I thought were pull down resistors
          hidden under the left-hand side white female pin headers (they did not, in
          fact, function as pull down resistors) and a power indicator LED.
          Unfortunately, I forgot the capacitor, but that would not have affected this
          board&apos;s outcome of failure. When creating this board, I also ran into major
          issues with the ATTiny1614, which stuck me for a couple hours. Apparently,
          some of the ATTiny1614 chips in our lab just didn&apos;t work, so I needed to get
          the ATTiny1614s out of a specific drawer because those chips had a small dot
          indentation on one side. Only the chips with the dot indentation seemed to
          work well, in my experience. Upon testing, the transistor got really hot and
          I unplugged it before it melted off.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/sight2.jpg" width={500} />
        </div>
        <p>
          In an attempt to simplify the amount of things that could cause the issue, I
          scaled down to one transistor, which in turn melted off.
        </p>
        <div className="text-center">
          <img
            src="../../pics/final/pcb/oneTransistorTestButItBlewUpOffTheBoard.jpg"
            width={500}
          />
        </div>
        <p>I tweaked the design with one transistor, and it melted again.</p>
        <div className="text-center">
          <img src="../../pics/final/pcb/transistorBlewUp2.jpg" width={500} />
        </div>
        <p>At this point, I created a ATTiny1614 board for testing and debugging.</p>
        <div className="text-center">
          <img src="../../pics/final/pcb/attiny.jpg" width={500} />
        </div>
        <p>
          I created another board with a pull down and headers to plug into external
          transistors. The hope was that this would allow me to test transistors
          without melting pads and traces.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/externTransistor.jpg" width={500} />
        </div>
        <p>
          At this point, I was fairly certain the transistor had a problem with
          handling power. I switched to the Eugepae board which had a different
          transistor. I had made this board during a group project for embedded
          networking and communications, and it had previously handled 5V, so I was
          pretty confused when it failed to power my 5V solenoids. Unfortunately, this
          board also failed, in retrospect likely because the solenoids pulled too
          many amps.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/eugepae.jpg" width={500} />
        </div>
        <p>
          I then decided to switch to a through hole MOSFET. This board also failed,
          which I&apos;m pretty confused about but will explain in the next paragraph.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/mosfet.jpg" width={500} />
        </div>
        <p>
          After all these boards failed, I found MOSFET drive modules in the Lab.
          These modules have six key inputs: VIN+, VIN-, VOUT+, VOUT-, TRIG, and GND.
          I ended up connecting the VIN+ and VIN- to the positive and ground terminals
          on the power input device (battery packs), the VOUT+ and VOUT- to the
          positive and ground of the load output device (solenoid), the TRIG pin to a
          GPIO on my ATTiny1614 board that would toggle the solenoid on and off, and
          the GND to ground. The architecture of the drive module (which worked) was
          really similar to some of my MOSFET attempts, so I am still a little unsure
          why this board worked when my own didn&apos;t. The only major discrepancy that I
          noticed was that this board had 2 transistors.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/mosfetModule.jpg" width={500} />
        </div>
        <p>
          Now that I decided to use the MOSFET breakout boards to toggle the
          solenoids, the MOSFETs are external to the main board and I am able to
          create a ATTiny1614 control board without transistors on it. My final board
          has headers for its power, ground, and data; a power indicator LED; a
          capacitor; pins for TX/RX serial communication with the Raspberry Pi, which
          will send text to be displayed as braille; 6 headers each corresponding to a
          GPIO pin on the ATTiny1614 which in turn, corresponds to controlling a
          single solenoid in the 3x2 array; and 6 headers for GND that will each
          connect to 1 MOSFET.
        </p>
        <div className="text-center">
          <img src="../../pics/final/pcb/final.jpg" width={500} />
        </div>
        <h3 id="esp32cam-wireless-transmission">ESP32CAM Wireless Transmission</h3>
        <p>
          WebSocket connections are initiated through HTTP protocol, using an upgrade
          request from HTTP to WebSocket. This begins with a client sending a standard
          HTTP request that includes an "Upgrade: websocket" header and a "Connection:
          Upgrade" header to the server. The server then responds with an HTTP 101
          status code, indicating that the protocol will change, thus establishing the
          WebSocket connection.
        </p>
        <p>
          WebSocket, uses IP addresses to facilitate the initial connection before
          upgrading to the WebSocket protocol. Once the WebSocket connection is
          established, the IP addresses are used to maintain the connection over which
          data frames can be reliably transmitted back and forth.
        </p>
        <p>
          Once the WebSocket connection is established, data is transmitted in framed
          messages through backend data transmission ports, where each frame consists
          of an opcode to indicate the type of data being transmitted (e.g., text,
          binary, continuation frame, or control frames like close, ping, or pong).
          This structure allows the WebSocket protocol to be extremely versatile and
          efficient in handling different types of data seamlessly. The frames are
          small and allow for very efficient data transmission.
        </p>
        <p>
          The following program is uploaded onto the ESP32 CAM Board through Arduino
          IDE. This program is based off of the CameraWebServer example program from
          ESP32.
        </p>
        <div className="code-block">
          <SyntaxHighlighter 
            language="cpp" 
            style={atomDark}
            showLineNumbers
          >
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">include</span>{" "}
              <span className="hljs-meta-string">"esp_camera.h"</span>
            </span>
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">include</span>{" "}
              <span className="hljs-meta-string">"WiFi.h"</span>
            </span>
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">include</span>{" "}
              <span className="hljs-meta-string">"WebSocketsServer.h"</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">define</span>{" "}
              CAMERA_MODEL_AI_THINKER{" "}
              <span className="hljs-comment">// Has PSRAM</span>
            </span>
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">include</span>{" "}
              <span className="hljs-meta-string">"camera_pins.h"</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-keyword">const</span>{" "}
            <span className="hljs-keyword">char</span>* ssid ={" "}
            <span className="hljs-string">"REDACTED"</span>;{"\n"}
            <span className="hljs-keyword">const</span>{" "}
            <span className="hljs-keyword">char</span>* password ={" "}
            <span className="hljs-string">"REDACTED"</span>;{"\n"}
            {"\n"}WebSocketsServer webSocket = WebSocketsServer(
            <span className="hljs-number">81</span>);{"\n"}
            {"\n"}
            <span className="hljs-keyword">void</span> startCameraServer();{"\n"}
            <span className="hljs-keyword">void</span> setupLedFlash(
            <span className="hljs-keyword">int</span> pin);{"\n"}
            <span className="hljs-keyword">void</span> onWebSocketEvent(uint8_t
            client_num, WStype_t type, uint8_t *payload, size_t length);{"\n"}
            {"\n"}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-built_in">setup</span>() {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">pinMode</span>(
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-literal">OUTPUT</span>);{"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">begin</span>(
            <span className="hljs-number">9600</span>);{"\n"}
            {"  "}
            <span className="hljs-built_in">while</span> (!
            <span className="hljs-built_in">Serial</span>);{" "}
            <span className="hljs-comment">
              // Wait for the serial connection to initialize
            </span>
            {"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.setDebugOutput(true);{"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">println</span>();{"\n"}
            {"\n"}
            {"  "}camera_config_t <span className="hljs-built_in">config</span>;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.ledc_channel =
            LEDC_CHANNEL_0;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.ledc_timer = LEDC_TIMER_0;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d0 = Y2_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d1 = Y3_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d2 = Y4_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d3 = Y5_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d4 = Y6_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d5 = Y7_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d6 = Y8_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_d7 = Y9_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_xclk = XCLK_GPIO_NUM;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_pclk = PCLK_GPIO_NUM;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_vsync = VSYNC_GPIO_NUM;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_href = HREF_GPIO_NUM;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_sscb_sda =
            SIOD_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_sscb_scl =
            SIOC_GPIO_NUM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_pwdn = PWDN_GPIO_NUM;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pin_reset = RESET_GPIO_NUM;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.xclk_freq_hz ={" "}
            <span className="hljs-number">20000000</span>;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.frame_size = FRAMESIZE_UXGA;
            {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.pixel_format =
            PIXFORMAT_JPEG; {"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.grab_mode =
            CAMERA_GRAB_WHEN_EMPTY;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.fb_location =
            CAMERA_FB_IN_PSRAM;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.jpeg_quality ={" "}
            <span className="hljs-number">12</span>;{"\n"}
            {"  "}
            <span className="hljs-built_in">config</span>.fb_count ={" "}
            <span className="hljs-number">1</span>;{"\n"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">if</span> (psramFound()) {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-built_in">config</span>.jpeg_quality ={" "}
            <span className="hljs-number">10</span>;{"\n"}
            {"    "}
            <span className="hljs-built_in">config</span>.fb_count ={" "}
            <span className="hljs-number">2</span>;{"\n"}
            {"    "}
            <span className="hljs-built_in">config</span>.grab_mode =
            CAMERA_GRAB_LATEST;{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"\n"}
            {"  "}esp_err_t err = esp_camera_init(&amp;
            <span className="hljs-built_in">config</span>);{"\n"}
            {"  "}
            <span className="hljs-built_in">if</span> (err != ESP_OK) {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-built_in">Serial</span>.printf(
            <span className="hljs-string">"Camera init failed with error 0x%x"</span>,
            err);{"\n"}
            {"    "}
            <span className="hljs-built_in">return</span>;{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"\n"}
            {"  "}sensor_t *s = esp_camera_sensor_get();{"\n"}
            {"  "}s-&gt;set_vflip(s, <span className="hljs-number">1</span>);{" "}
            <span className="hljs-comment">// Flip it back</span>
            {"\n"}
            {"  "}s-&gt;set_brightness(s, <span className="hljs-number">1</span>);{" "}
            <span className="hljs-comment">// Up the brightness just a bit</span>
            {"\n"}
            {"  "}s-&gt;set_saturation(s, <span className="hljs-number">-2</span>);{" "}
            <span className="hljs-comment">// Lower the saturation</span>
            {"\n"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> defined(LED_GPIO_NUM)
            </span>
            {"\n"}
            {"  "}setupLedFlash(LED_GPIO_NUM);{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">WiFi</span>.
            <span className="hljs-built_in">begin</span>(ssid, password);{"\n"}
            {"  "}
            <span className="hljs-built_in">WiFi</span>.setSleep(false);{"\n"}
            {"  "}
            <span className="hljs-built_in">while</span> (
            <span className="hljs-built_in">WiFi</span>.status() != WL_CONNECTED){" "}
            {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-built_in">delay</span>(
            <span className="hljs-number">500</span>);{"\n"}
            {"    "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">print</span>(
            <span className="hljs-string">"."</span>);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">println</span>(
            <span className="hljs-string">""</span>);{"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">println</span>(
            <span className="hljs-string">"WiFi connected"</span>);{"\n"}
            {"  "}webSocket.<span className="hljs-built_in">begin</span>();{"\n"}
            {"  "}webSocket.onEvent(onWebSocketEvent);{"\n"}
            {"  "}startCameraServer();{"\n"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">print</span>(
            <span className="hljs-string">"Camera Ready! Use &apos;http://"</span>);{"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">print</span>(
            <span className="hljs-built_in">WiFi</span>.
            <span className="hljs-built_in">localIP</span>());{"\n"}
            {"  "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">println</span>(
            <span className="hljs-string">"&apos; to connect"</span>);{"\n"}
            {"}"}
            {"\n"}
            {"\n"}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-built_in">loop</span>() {"{"}
            {"\n"}
            {"  "}webSocket.<span className="hljs-built_in">loop</span>();{"\n"}
            {"}"}
            {"\n"}
            {"\n"}
            <span className="hljs-keyword">void</span> onWebSocketEvent(uint8_t
            client_num, WStype_t type, uint8_t *payload, size_t length) {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">switch</span> (type) {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-built_in">case</span> WStype_DISCONNECTED:{"\n"}
            {"      "}
            <span className="hljs-built_in">Serial</span>.printf(
            <span className="hljs-string">"[%u] Disconnected!\n"</span>, client_num);
            {"\n"}
            {"      "}
            <span className="hljs-built_in">break</span>;{"\n"}
            {"    "}
            <span className="hljs-built_in">case</span> WStype_CONNECTED:{"\n"}
            {"      "}
            {"{"}
            {"\n"}
            {"        "}
            <span className="hljs-built_in">IPAddress</span> ip = webSocket.
            <span className="hljs-built_in">remoteIP</span>(client_num);{"\n"}
            {"        "}
            <span className="hljs-built_in">Serial</span>.printf(
            <span className="hljs-string">"[%u] Connection from "</span>, client_num);
            {"\n"}
            {"        "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">println</span>(ip.toString());{"\n"}
            {"      "}
            {"}"}
            {"\n"}
            {"      "}
            <span className="hljs-built_in">break</span>;{"\n"}
            {"    "}
            <span className="hljs-built_in">case</span> WStype_TEXT:{"\n"}
            {"      "}
            <span className="hljs-built_in">if</span> (strcmp((
            <span className="hljs-keyword">char</span> *)payload,{" "}
            <span className="hljs-string">"capture"</span>) =={" "}
            <span className="hljs-number">0</span>) {"{"}
            {"\n"}
            {"        "}camera_fb_t *fb = esp_camera_fb_get();{"\n"}
            {"        "}
            <span className="hljs-built_in">if</span> (!fb) {"{"}
            {"\n"}
            {"          "}
            <span className="hljs-built_in">Serial</span>.
            <span className="hljs-built_in">println</span>(
            <span className="hljs-string">"Camera capture failed"</span>);{"\n"}
            {"        "}
            {"}"} <span className="hljs-built_in">else</span> {"{"}
            {"\n"}
            {"          "}webSocket.sendBIN(client_num, fb-&gt;buf, fb-&gt;len);{"\n"}
            {"          "}esp_camera_fb_return(fb);{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"      "}
            {"}"}
            {"\n"}
            {"      "}
            <span className="hljs-built_in">break</span>;{"\n"}
            {"    "}
            <span className="hljs-built_in">case</span> WStype_BIN:{"\n"}
            {"      "}
            <span className="hljs-built_in">Serial</span>.printf(
            <span className="hljs-string">"[%u] Get binary length: %u\n"</span>,
            client_num, length);{"\n"}
            {"      "}
            <span className="hljs-built_in">break</span>;{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}
            <span className="hljs-keyword">void</span> setupLedFlash(
            <span className="hljs-keyword">int</span> pin) {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-built_in">pinMode</span>(pin,{" "}
            <span className="hljs-literal">OUTPUT</span>);{"\n"}
            {"  "}
            <span className="hljs-built_in">digitalWrite</span>(pin,{" "}
            <span className="hljs-literal">LOW</span>);{"\n"}
            {"}"}
            {"\n"}
          </SyntaxHighlighter>
        </div>
        <p>
          This program connects the ESP32CAM to a local WiFi network. It then sets up
          and initializes the camera, and sets up the local IP connection. It then
          continuously waits for a web socket connection. When a connection is
          created, it prints the IP address of the connecting device. If the device
          sends an input of "capture", the camera will take a picture and send it via
          the network web socket connection to the connecting Raspberry Pi.
        </p>
        <h3 id="camera-feed-ocr">Camera Feed OCR</h3>
        <p>
          I had previously setup infrastructure to wirelessly transmit a command to
          capture an image from a Raspberry Pi to the ESP32CAM, along with sending the
          image data back over the network and saving it. I had created a WebSocket
          server to accept commands and then send the image data over HTTP back to the
          Raspberry Pi.
        </p>
        <p>
          However, I realized that I could fetch the image without needing a WebSocket
          handler by connecting to the ESP32CAM&apos;s capture image handler directly. The
          capture handler from the default CameraWebServer example project sets up a
          port that allows a direct download to what is currently on the camera feed.
        </p>
        <div className="code-block">
          <SyntaxHighlighter 
            language="cpp" 
            style={atomDark}
            showLineNumbers
          >
            <span className="hljs-function">
              <span className="hljs-keyword">static</span> esp_err_t{" "}
              <span className="hljs-title">capture_handler</span>
              <span className="hljs-params">
                (<span className="hljs-keyword">httpd_req_t</span> *req)
              </span>
              {"\n"}
            </span>
            {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">camera_fb_t</span> *fb ={" "}
            <span className="hljs-literal">NULL</span>;{"\n"}
            {"    "}
            <span className="hljs-keyword">esp_err_t</span> res = ESP_OK;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-keyword">int64_t</span> fr_start =
            esp_timer_get_time();{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span>{" "}
              CONFIG_LED_ILLUMINATOR_ENABLED
            </span>
            {"\n"}
            {"    "}enable_led(<span className="hljs-literal">true</span>);{"\n"}
            {"    "}vTaskDelay(<span className="hljs-number">150</span> /
            portTICK_PERIOD_MS);{" "}
            <span className="hljs-comment">
              // The LED needs to be turned on ~150ms before the call to
              esp_camera_fb_get()
            </span>
            {"\n"}
            {"    "}fb = esp_camera_fb_get();{"             "}
            <span className="hljs-comment">
              // or it won&apos;t be visible in the frame. A better way to do this is
              needed.
            </span>
            {"\n"}
            {"    "}enable_led(<span className="hljs-literal">false</span>);{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">else</span>
            </span>
            {"\n"}
            {"    "}fb = esp_camera_fb_get();{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">if</span> (!fb){"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"        "}log_e(
            <span className="hljs-string">"Camera capture failed"</span>);{"\n"}
            {"        "}httpd_resp_send_500(req);{"\n"}
            {"        "}
            <span className="hljs-keyword">return</span> ESP_FAIL;{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}httpd_resp_set_type(req,{" "}
            <span className="hljs-string">"image/jpeg"</span>);{"\n"}
            {"    "}httpd_resp_set_hdr(req,{" "}
            <span className="hljs-string">"Content-Disposition"</span>,{" "}
            <span className="hljs-string">"inline; filename=capture.jpg"</span>);
            {"\n"}
            {"    "}httpd_resp_set_hdr(req,{" "}
            <span className="hljs-string">"Access-Control-Allow-Origin"</span>,{" "}
            <span className="hljs-string">"*"</span>);{"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">char</span> ts[
            <span className="hljs-number">32</span>];{"\n"}
            {"    "}
            <span className="hljs-built_in">snprintf</span>(ts,{" "}
            <span className="hljs-number">32</span>,{" "}
            <span className="hljs-string">"%lld.%06ld"</span>,
            fb-&gt;timestamp.tv_sec, fb-&gt;timestamp.tv_usec);{"\n"}
            {"    "}httpd_resp_set_hdr(req,{" "}
            <span className="hljs-string">"X-Timestamp"</span>, (
            <span className="hljs-keyword">const</span>{" "}
            <span className="hljs-keyword">char</span> *)ts);{"\n"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span>{" "}
              CONFIG_ESP_FACE_DETECT_ENABLED
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-keyword">size_t</span> out_len, out_width,
            out_height;{"\n"}
            {"    "}
            <span className="hljs-keyword">uint8_t</span> *out_buf;{"\n"}
            {"    "}
            <span className="hljs-keyword">bool</span> s;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-keyword">bool</span> detected ={" "}
            <span className="hljs-literal">false</span>;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-keyword">int</span> face_id ={" "}
            <span className="hljs-number">0</span>;{"\n"}
            {"    "}
            <span className="hljs-keyword">if</span> (!detection_enabled ||
            fb-&gt;width &gt; <span className="hljs-number">400</span>){"\n"}
            {"    "}
            {"{"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-keyword">size_t</span> fb_len ={" "}
            <span className="hljs-number">0</span>;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-keyword">if</span> (fb-&gt;format == PIXFORMAT_JPEG)
            {"\n"}
            {"        "}
            {"{"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"            "}fb_len = fb-&gt;len;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"            "}res = httpd_resp_send(req, (
            <span className="hljs-keyword">const</span>{" "}
            <span className="hljs-keyword">char</span> *)fb-&gt;buf, fb-&gt;len);
            {"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"        "}
            <span className="hljs-keyword">else</span>
            {"\n"}
            {"        "}
            {"{"}
            {"\n"}
            {"            "}
            <span className="hljs-keyword">jpg_chunking_t</span> jchunk = {"{"}req,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}
            {"            "}res = frame2jpg_cb(fb,{" "}
            <span className="hljs-number">80</span>, jpg_encode_stream, &amp;jchunk) ?
            ESP_OK : ESP_FAIL;{"\n"}
            {"            "}httpd_resp_send_chunk(req,{" "}
            <span className="hljs-literal">NULL</span>,{" "}
            <span className="hljs-number">0</span>);{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"            "}fb_len = jchunk.len;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"        "}esp_camera_fb_return(fb);{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-keyword">int64_t</span> fr_end =
            esp_timer_get_time();{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"        "}log_i(<span className="hljs-string">"JPG: %uB %ums"</span>, (
            <span className="hljs-keyword">uint32_t</span>)(fb_len), (
            <span className="hljs-keyword">uint32_t</span>)((fr_end - fr_start) /{" "}
            <span className="hljs-number">1000</span>));{"\n"}
            {"        "}
            <span className="hljs-keyword">return</span> res;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span>{" "}
              CONFIG_ESP_FACE_DETECT_ENABLED
            </span>
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">jpg_chunking_t</span> jchunk = {"{"}req,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">if</span> (fb-&gt;format ==
            PIXFORMAT_RGB565{"\n"}#<span className="hljs-keyword">if</span>{" "}
            CONFIG_ESP_FACE_RECOGNITION_ENABLED{"\n"}
            {"     "}&amp;&amp; !recognition_enabled{"\n"}#endif{"\n"}
            {"     "}){"{"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> TWO_STAGE
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-function">
              HumanFaceDetectMSR01 <span className="hljs-title">s1</span>
              <span className="hljs-params">
                (<span className="hljs-number">0.1F</span>,{" "}
                <span className="hljs-number">0.5F</span>,{" "}
                <span className="hljs-number">10</span>,{" "}
                <span className="hljs-number">0.2F</span>)
              </span>
            </span>
            ;{"\n"}
            {"        "}
            <span className="hljs-function">
              HumanFaceDetectMNP01 <span className="hljs-title">s2</span>
              <span className="hljs-params">
                (<span className="hljs-number">0.5F</span>,{" "}
                <span className="hljs-number">0.3F</span>,{" "}
                <span className="hljs-number">5</span>)
              </span>
            </span>
            ;{"\n"}
            {"        "}
            <span className="hljs-built_in">std</span>::
            <span className="hljs-built_in">list</span>&lt;dl::detect::
            <span className="hljs-keyword">result_t</span>&gt; &amp;candidates =
            s1.infer((<span className="hljs-keyword">uint16_t</span> *)fb-&gt;buf,{" "}
            {"{"}(<span className="hljs-keyword">int</span>)fb-&gt;height, (
            <span className="hljs-keyword">int</span>)fb-&gt;width,{" "}
            <span className="hljs-number">3</span>
            {"}"});{"\n"}
            {"        "}
            <span className="hljs-built_in">std</span>::
            <span className="hljs-built_in">list</span>&lt;dl::detect::
            <span className="hljs-keyword">result_t</span>&gt; &amp;results =
            s2.infer((<span className="hljs-keyword">uint16_t</span> *)fb-&gt;buf,{" "}
            {"{"}(<span className="hljs-keyword">int</span>)fb-&gt;height, (
            <span className="hljs-keyword">int</span>)fb-&gt;width,{" "}
            <span className="hljs-number">3</span>
            {"}"}, candidates);{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">else</span>
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-function">
              HumanFaceDetectMSR01 <span className="hljs-title">s1</span>
              <span className="hljs-params">
                (<span className="hljs-number">0.3F</span>,{" "}
                <span className="hljs-number">0.5F</span>,{" "}
                <span className="hljs-number">10</span>,{" "}
                <span className="hljs-number">0.2F</span>)
              </span>
            </span>
            ;{"\n"}
            {"        "}
            <span className="hljs-built_in">std</span>::
            <span className="hljs-built_in">list</span>&lt;dl::detect::
            <span className="hljs-keyword">result_t</span>&gt; &amp;results =
            s1.infer((<span className="hljs-keyword">uint16_t</span> *)fb-&gt;buf,{" "}
            {"{"}(<span className="hljs-keyword">int</span>)fb-&gt;height, (
            <span className="hljs-keyword">int</span>)fb-&gt;width,{" "}
            <span className="hljs-number">3</span>
            {"}"});{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-keyword">if</span> (results.size() &gt;{" "}
            <span className="hljs-number">0</span>) {"{"}
            {"\n"}
            {"            "}
            <span className="hljs-keyword">fb_data_t</span> rfb;{"\n"}
            {"            "}rfb.width = fb-&gt;width;{"\n"}
            {"            "}rfb.height = fb-&gt;height;{"\n"}
            {"            "}rfb.data = fb-&gt;buf;{"\n"}
            {"            "}rfb.bytes_per_pixel ={" "}
            <span className="hljs-number">2</span>;{"\n"}
            {"            "}rfb.format = FB_RGB565;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"            "}detected = <span className="hljs-literal">true</span>;
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"            "}draw_face_boxes(&amp;rfb, &amp;results, face_id);{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"        "}s = fmt2jpg_cb(fb-&gt;buf, fb-&gt;len, fb-&gt;width,
            fb-&gt;height, PIXFORMAT_RGB565, <span className="hljs-number">90</span>,
            jpg_encode_stream, &amp;jchunk);{"\n"}
            {"        "}esp_camera_fb_return(fb);{"\n"}
            {"    "}
            {"}"} <span className="hljs-keyword">else</span>
            {"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"        "}out_len = fb-&gt;width * fb-&gt;height *{" "}
            <span className="hljs-number">3</span>;{"\n"}
            {"        "}out_width = fb-&gt;width;{"\n"}
            {"        "}out_height = fb-&gt;height;{"\n"}
            {"        "}out_buf = (<span className="hljs-keyword">uint8_t</span>*)
            <span className="hljs-built_in">malloc</span>(out_len);{"\n"}
            {"        "}
            <span className="hljs-keyword">if</span> (!out_buf) {"{"}
            {"\n"}
            {"            "}log_e(
            <span className="hljs-string">"out_buf malloc failed"</span>);{"\n"}
            {"            "}httpd_resp_send_500(req);{"\n"}
            {"            "}
            <span className="hljs-keyword">return</span> ESP_FAIL;{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"        "}s = fmt2rgb888(fb-&gt;buf, fb-&gt;len, fb-&gt;format,
            out_buf);{"\n"}
            {"        "}esp_camera_fb_return(fb);{"\n"}
            {"        "}
            <span className="hljs-keyword">if</span> (!s) {"{"}
            {"\n"}
            {"            "}
            <span className="hljs-built_in">free</span>(out_buf);{"\n"}
            {"            "}log_e(
            <span className="hljs-string">"To rgb888 failed"</span>);{"\n"}
            {"            "}httpd_resp_send_500(req);{"\n"}
            {"            "}
            <span className="hljs-keyword">return</span> ESP_FAIL;{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"\n"}
            {"        "}
            <span className="hljs-keyword">fb_data_t</span> rfb;{"\n"}
            {"        "}rfb.width = out_width;{"\n"}
            {"        "}rfb.height = out_height;{"\n"}
            {"        "}rfb.data = out_buf;{"\n"}
            {"        "}rfb.bytes_per_pixel = <span className="hljs-number">3</span>;
            {"\n"}
            {"        "}rfb.format = FB_BGR888;{"\n"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> TWO_STAGE
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-function">
              HumanFaceDetectMSR01 <span className="hljs-title">s1</span>
              <span className="hljs-params">
                (<span className="hljs-number">0.1F</span>,{" "}
                <span className="hljs-number">0.5F</span>,{" "}
                <span className="hljs-number">10</span>,{" "}
                <span className="hljs-number">0.2F</span>)
              </span>
            </span>
            ;{"\n"}
            {"        "}
            <span className="hljs-function">
              HumanFaceDetectMNP01 <span className="hljs-title">s2</span>
              <span className="hljs-params">
                (<span className="hljs-number">0.5F</span>,{" "}
                <span className="hljs-number">0.3F</span>,{" "}
                <span className="hljs-number">5</span>)
              </span>
            </span>
            ;{"\n"}
            {"        "}
            <span className="hljs-built_in">std</span>::
            <span className="hljs-built_in">list</span>&lt;dl::detect::
            <span className="hljs-keyword">result_t</span>&gt; &amp;candidates =
            s1.infer((<span className="hljs-keyword">uint8_t</span> *)out_buf, {"{"}(
            <span className="hljs-keyword">int</span>)out_height, (
            <span className="hljs-keyword">int</span>)out_width,{" "}
            <span className="hljs-number">3</span>
            {"}"});{"\n"}
            {"        "}
            <span className="hljs-built_in">std</span>::
            <span className="hljs-built_in">list</span>&lt;dl::detect::
            <span className="hljs-keyword">result_t</span>&gt; &amp;results =
            s2.infer((<span className="hljs-keyword">uint8_t</span> *)out_buf, {"{"}(
            <span className="hljs-keyword">int</span>)out_height, (
            <span className="hljs-keyword">int</span>)out_width,{" "}
            <span className="hljs-number">3</span>
            {"}"}, candidates);{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">else</span>
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-function">
              HumanFaceDetectMSR01 <span className="hljs-title">s1</span>
              <span className="hljs-params">
                (<span className="hljs-number">0.3F</span>,{" "}
                <span className="hljs-number">0.5F</span>,{" "}
                <span className="hljs-number">10</span>,{" "}
                <span className="hljs-number">0.2F</span>)
              </span>
            </span>
            ;{"\n"}
            {"        "}
            <span className="hljs-built_in">std</span>::
            <span className="hljs-built_in">list</span>&lt;dl::detect::
            <span className="hljs-keyword">result_t</span>&gt; &amp;results =
            s1.infer((<span className="hljs-keyword">uint8_t</span> *)out_buf, {"{"}(
            <span className="hljs-keyword">int</span>)out_height, (
            <span className="hljs-keyword">int</span>)out_width,{" "}
            <span className="hljs-number">3</span>
            {"}"});{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="hljs-keyword">if</span> (results.size() &gt;{" "}
            <span className="hljs-number">0</span>) {"{"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"            "}detected = <span className="hljs-literal">true</span>;
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span>{" "}
              CONFIG_ESP_FACE_RECOGNITION_ENABLED
            </span>
            {"\n"}
            {"            "}
            <span className="hljs-keyword">if</span> (recognition_enabled) {"{"}
            {"\n"}
            {"                "}face_id = run_face_recognition(&amp;rfb,
            &amp;results);{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"            "}draw_face_boxes(&amp;rfb, &amp;results, face_id);{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"\n"}
            {"        "}s = fmt2jpg_cb(out_buf, out_len, out_width, out_height,
            PIXFORMAT_RGB888, <span className="hljs-number">90</span>,
            jpg_encode_stream, &amp;jchunk);{"\n"}
            {"        "}
            <span className="hljs-built_in">free</span>(out_buf);{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">if</span> (!s) {"{"}
            {"\n"}
            {"        "}log_e(
            <span className="hljs-string">"JPEG compression failed"</span>);{"\n"}
            {"        "}httpd_resp_send_500(req);{"\n"}
            {"        "}
            <span className="hljs-keyword">return</span> ESP_FAIL;{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">if</span> ARDUHAL_LOG_LEVEL &gt;=
              ARDUHAL_LOG_LEVEL_INFO
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-keyword">int64_t</span> fr_end =
            esp_timer_get_time();{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"    "}log_i(<span className="hljs-string">"FACE: %uB %ums %s%d"</span>,
            (<span className="hljs-keyword">uint32_t</span>)(jchunk.len), (
            <span className="hljs-keyword">uint32_t</span>)((fr_end - fr_start) /{" "}
            <span className="hljs-number">1000</span>), detected ?{" "}
            <span className="hljs-string">"DETECTED "</span> :{" "}
            <span className="hljs-string">""</span>, face_id);{"\n"}
            {"    "}
            <span className="hljs-keyword">return</span> res;{"\n"}
            <span className="hljs-meta">
              #<span className="hljs-meta-keyword">endif</span>
            </span>
            {"\n"}
            {"}"}
            {"\n"}
          </SyntaxHighlighter>
        </div>
        <p>
          I then set up the Raspberry Pi to receive an image from the ESP32CAM and
          perform OCR upon it.
        </p>
        <p>First, I created a directory to store this project.</p>
        <pre>
          <code>
            <span className="hljs-built_in">cd</span> Desktop{"\n"}
            <span className="hljs-built_in">mkdir</span> ocr{"\n"}
          </code>
        </pre>
        <p>
          Upon entering the new directory, I need to create a virtual environment to
          install the libraries I will be using for OCR.
        </p>
        <pre>
          <code className="lang-cmd">
            python -m venv /<span className="hljs-keyword">virtual</span>
            {"\n"}
          </code>
        </pre>
        <p>However, running this command gave me an error. </p>
        <pre>
          <code>
            <span className="hljs-keyword">Error: </span>[Errno13] Permission denied:
            &apos;/virtual&apos;{"\n"}
          </code>
        </pre>
        <p>
          For some reason, this command didn&apos;t have the permissions to create a new
          virtual environment, which was strange considering that the project
          directory was not protected in any way. Regardless, I attached the sudo
          prefix and successfully created the virtual environment.
        </p>
        <pre>
          <code>
            sudo python -m venv /<span className="hljs-keyword">virtual</span>
            {"\n"}
          </code>
        </pre>
        <p>I then entered the virtual environment by activating it.</p>
        <pre>
          <code>
            source bin/<span className="hljs-built_in">activate</span>
            {"\n"}
          </code>
        </pre>
        <p>
          The bin/activate is a relative path and would activate the venv as long as I
          am in the "ocr" folder. However, the venv could also be activated by
          supplying the absolute path of "~/home/richard/Desktop/ocr/bin/activate".
        </p>
        <h4 id="pytesseract">PyTesseract</h4>
        <p>
          After activating the virtual environment, I can install all of my library
          dependencies.
        </p>
        <pre>
          <code>
            sudo pip <span className="hljs-keyword">install</span> pytesseract{"\n"}
            sudo pip <span className="hljs-keyword">install</span> opencv-python{"\n"}
          </code>
        </pre>
        <p>I then created the actual program that the Raspberry Pi would run.</p>
        <pre>
          <code className="lang-py">
            <span className="hljs-keyword">import</span>{" "}
            <span className="hljs-built_in">time</span>
            {"\n"}
            <span className="hljs-keyword">import</span> cv2{"\n"}
            <span className="hljs-keyword">import</span> urllib.request{"\n"}
            <span className="hljs-keyword">import</span> numpy{" "}
            <span className="hljs-keyword">as</span> np{"\n"}
            <span className="hljs-keyword">import</span> pytesseract{"\n"}
            {"\n"}url ={" "}
            <span className="hljs-string">&apos;http://10.12.28.193/capture&apos;</span>
            {"\n"}
            {"\n"}img_resp = urllib.request.urlopen(url){"\n"}imgnp =
            np.array(bytearray(img_resp.read()), dtype=np.uint8){"\n"}frame =
            cv2.imdecode(imgnp, -<span className="hljs-number">1</span>){"\n"}
            {"\n"}
            <span className="hljs-keyword">text</span> =
            pytesseract.image_to_string(frame, config=
            <span className="hljs-string">&apos;--psm 7&apos;</span>){"\n"}
            {"\n"}print(<span className="hljs-string">"Extracted Text:"</span>,{" "}
            <span className="hljs-keyword">text</span>){"\n"}
            <span className="hljs-built_in">time</span>.sleep(
            <span className="hljs-number">1</span>){"\n"}
          </code>
        </pre>
        <p>
          This script has the Raspberry Pi connect to the /capture handler of the
          ESP32CAM interface, which directly returns a capture of the current feed. It
          then decodes the image and parses it into the pytesseract OCR function. The
          PSM value of 6 tells the OCR model to scan the image for a single text block
          and extract text from that. A full list of PSM value options can be found by
          running <code>tesseract --help-psm</code> in the terminal.
        </p>
        <pre>
          <code>
            {"  "}
            <span className="hljs-number">0</span>
            {"    "}Orientation <span className="hljs-keyword">and</span> script
            detection (OSD) only.{"\n"}
            {"  "}
            <span className="hljs-number">1</span>
            {"    "}Automatic page segmentation{" "}
            <span className="hljs-keyword">with</span> OSD.{"\n"}
            {"  "}
            <span className="hljs-number">2</span>
            {"    "}Automatic page segmentation, but no OSD,{" "}
            <span className="hljs-keyword">or</span> OCR. (
            <span className="hljs-keyword">not</span> implemented){"\n"}
            {"  "}
            <span className="hljs-number">3</span>
            {"    "}Fully automatic page segmentation, but no OSD. (Default){"\n"}
            {"  "}
            <span className="hljs-number">4</span>
            {"    "}Assume <span className="hljs-keyword">a</span> single column{" "}
            <span className="hljs-keyword">of</span>{" "}
            <span className="hljs-keyword">text</span>{" "}
            <span className="hljs-keyword">of</span>{" "}
            <span className="hljs-built_in">variable</span> sizes.{"\n"}
            {"  "}
            <span className="hljs-number">5</span>
            {"    "}Assume <span className="hljs-keyword">a</span> single uniform
            block <span className="hljs-keyword">of</span> vertically aligned{" "}
            <span className="hljs-keyword">text</span>.{"\n"}
            {"  "}
            <span className="hljs-number">6</span>
            {"    "}Assume <span className="hljs-keyword">a</span> single uniform
            block <span className="hljs-keyword">of</span>{" "}
            <span className="hljs-keyword">text</span>.{"\n"}
            {"  "}
            <span className="hljs-number">7</span>
            {"    "}Treat <span className="hljs-keyword">the</span> image{" "}
            <span className="hljs-keyword">as</span>{" "}
            <span className="hljs-keyword">a</span> single{" "}
            <span className="hljs-keyword">text</span>{" "}
            <span className="hljs-built_in">line</span>.{"\n"}
            {"  "}
            <span className="hljs-number">8</span>
            {"    "}Treat <span className="hljs-keyword">the</span> image{" "}
            <span className="hljs-keyword">as</span>{" "}
            <span className="hljs-keyword">a</span> single{" "}
            <span className="hljs-built_in">word</span>.{"\n"}
            {"  "}
            <span className="hljs-number">9</span>
            {"    "}Treat <span className="hljs-keyword">the</span> image{" "}
            <span className="hljs-keyword">as</span>{" "}
            <span className="hljs-keyword">a</span> single{" "}
            <span className="hljs-built_in">word</span>{" "}
            <span className="hljs-keyword">in</span>{" "}
            <span className="hljs-keyword">a</span> circle.{"\n"}{" "}
            <span className="hljs-number">10</span>
            {"    "}Treat <span className="hljs-keyword">the</span> image{" "}
            <span className="hljs-keyword">as</span>{" "}
            <span className="hljs-keyword">a</span> single{" "}
            <span className="hljs-keyword">character</span>.{"\n"}{" "}
            <span className="hljs-number">11</span>
            {"    "}Sparse <span className="hljs-keyword">text</span>. Find{" "}
            <span className="hljs-keyword">as</span> much{" "}
            <span className="hljs-keyword">text</span>{" "}
            <span className="hljs-keyword">as</span> possible{" "}
            <span className="hljs-keyword">in</span> no particular order.{"\n"}{" "}
            <span className="hljs-number">12</span>
            {"    "}Sparse <span className="hljs-keyword">text</span>{" "}
            <span className="hljs-keyword">with</span> OSD.{"\n"}{" "}
            <span className="hljs-number">13</span>
            {"    "}Raw <span className="hljs-built_in">line</span>. Treat{" "}
            <span className="hljs-keyword">the</span> image{" "}
            <span className="hljs-keyword">as</span>{" "}
            <span className="hljs-keyword">a</span> single{" "}
            <span className="hljs-keyword">text</span>{" "}
            <span className="hljs-built_in">line</span>, bypassing hacks that are
            Tesseract-specific.{"\n"}
          </code>
        </pre>
        <p>
          In my case, since I want the model to scan an image to find the line of text
          for "Hello World!", I will use psm-7.
        </p>
        <p>Here is a photo of my Raspberry Pi setup.</p>
        <div className="text-center">
          <img src="../../pics/week15/setup.jpg" width={500} />
        </div>
        <p>
          The ESP32CAM is pointed towards a paper with the words "Hello World!". In
          the right side of the picture, the Raspberry Pi which is running the code is
          visible along with the display. Upon running the program on the Pi&apos;s
          terminal, the ESP32CAM takes a picture and transmits it to the Pi, which
          then uses tesseract to perform OCR on it and prints out the extracted text.
        </p>
        <div className="text-center">
          <video width={550} height={300} controls="">
            <source src="../../pics/week15/pi.mp4" type="video/mp4" />
          </video>
        </div>
        <h4 id="gpt4o">GPT4o</h4>
        <p>
          At this point, I wanted to try to use as little computational power as
          possible, and thus decided to switch to processing my image in base64.
          Although switching to base64 ultimately failed to scale down the computing
          enough to run on a microcontroller, it still led me in an interesting
          direction: that I could use GPT4o&apos;s new multimodal capabilities as an OCR
          engine to extract text from the base64 image. GPT4o in general is much more
          accurate in OCR than pytesseract, hence the switch.
        </p>
        <p>
          To do this, I first created a new handler on the ESP32CAM that would have it
          return a base64 string of a capture of the camera feed when that handler is
          called.
        </p>
        <div className="code-block">
          <SyntaxHighlighter 
            language="cpp" 
            style={atomDark}
            showLineNumbers
          >
            {`
            static esp_err_t jpg_base64_handler(httpd_req_t *req) {
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

            httpd_uri_t base64_uri = {
                .uri = "/base64",
                .method = HTTP_GET,
                .handler = jpg_base64_handler,
                .user_ctx = NULL
            };

            httpd_register_uri_handler(camera_httpd, &base64_uri);
            `}
          </SyntaxHighlighter>
        </div>
        <p>
          A base64 string containing the data of a single frame captured by the
          ESP32CAM looks something like this:
        </p>
        <div className="code-block">
          <SyntaxHighlighter 
            language="text" 
            style={atomDark}
          >
            {`/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHCAkIBgoJCAkLCwoMDxkQDw4ODx8WFxIZJCAmJiQgIyIoLToxKCs2KyIjMkQzNjs9QEFAJzBHTEY/Szo/QD7/2wBDAQsLCw8NDx0QEB0+KSMpPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/wAARCADwAUADASEAAhEBAxEB/99kAAACrpqImjmwavwXFZtDNSG4+WrFpc/vbkZ6MuPypEEzzbsGmmQ460dRgj/PT5pOaLhfUhL0m6gZzXis/6dZf9cH/APQhXPt1qxDabQPYSkoATvRQwCkNCAKSmB//2Q==`}
          </SyntaxHighlighter>
        </div>
        <p>
          With some modifications to{" "}
          <a href="https://platform.openai.com/docs/guides/vision">
            <strong>OpenAI&apos;s sample code</strong>
          </a>{" "}
          and the help of GPT-4o itself, I created the following script that would
          grab the base64 data from the custom handler and parse it into the model.
          The prompt for the model is "You are a image to text OCR engine. Output the
          text you see in this image, and nothing else."
        </p>
        <div className="code-block">
          <SyntaxHighlighter 
            language="python" 
            style={atomDark}
            showLineNumbers
          >
            {`
            response = requests.post("https://api.openai.com/v1/chat/completions",
                                   headers=headers, json=payload)

            content_string = response.json()['choices'][0]['message']['content']
            print(content_string)
            `}
          </SyntaxHighlighter>
        </div>
        <p>
          With the same setup as the Raspberry Pi, where the ESP32CAM is pointed
          towards a paper with the words "Hello World!", I ran the script on my
          computer to test it out.
        </p>
        <p>Upon running, the following is printed out:</p>
        <div className="text-center">
          <img src="../../pics/week15/4oJson.jpg" width={750} />
        </div>
        <p>
          As is seen in the output, the prompt worked and the 4o model detected "Hello
          World!" as the text extract and stored it in &apos;content&apos;. To just output the
          content, which is the actual result I want, I can modify the code a little.
        </p>
        <pre>
          <code className="lang-py">
            response = requests.post("https://api.openai.com/v1/chat/completions",
            headers=headers, json=payload){"\n"}
            {"\n"}content_string = response.json()[
            <span className="hljs-string">&apos;choices&apos;</span>][
            <span className="hljs-symbol">0</span>][
            <span className="hljs-string">&apos;message&apos;</span>][
            <span className="hljs-symbol">&apos;content&apos;</span>]{"\n"}print(content_string)
            {"\n"}
          </code>
        </pre>
        <p>Here is the code just printing out the extracted OCR text.</p>
        <div className="text-center">
          <img src="../../pics/week15/4oExtracted.jpg" width={750} />
        </div>
        <p>
          This was essentially the bare-bones version of my final project Pi code.
          After integrating the serial communication functionality, and changing the
          wording of the prompt, I had the final code for the Raspberry Pi ready:
        </p>
        <pre>
          <code className="lang-py">
            <span className="hljs-keyword">from</span> serial{" "}
            <span className="hljs-keyword">import</span> Serial{"\n"}
            <span className="hljs-keyword">import</span> time{"\n"}
            <span className="hljs-keyword">import</span> requests{"\n"}
            {"\n"}
            <span className="hljs-comment"># OpenAI API Key</span>
            {"\n"}api_key = <span className="hljs-string">"REDACTED"</span>
            {"\n"}
            {"\n"}
            <span className="hljs-comment"># Configure the serial port</span>
            {"\n"}ser = Serial(<span className="hljs-string">&apos;/dev/serial0&apos;</span>,{" "}
            <span className="hljs-number">9600</span>, timeout ={" "}
            <span className="hljs-number">1</span>){"\n"}
            {"\n"}
            <span className="hljs-comment">
              # Function to get the base64 encoded image from ESP32CAM
            </span>
            {"\n"}
            <span className="hljs-function">
              <span className="hljs-keyword">def</span>{" "}
              <span className="hljs-title">get_base64_image</span>
              <span className="hljs-params">(url)</span>:
            </span>
            {"\n"}
            {"    "}response = requests.get(url){"\n"}
            {"    "}print(<span className="hljs-string">"Camera connected"</span>)
            {"\n"}
            {"    "}
            <span className="hljs-keyword">return</span> response.text{"\n"}
            {"\n"}
            <span className="hljs-comment">
              # URL to the ESP32CAM base64 image endpoint
            </span>
            {"\n"}esp32cam_url ={" "}
            <span className="hljs-string">"http://10.12.23.1/base64"</span>
            {"\n"}
            {"\n"}
            <span className="hljs-comment"># Getting the base64 string</span>
            {"\n"}base64_image = get_base64_image(esp32cam_url){"\n"}
            {"\n"}
            <span className="hljs-comment"># Function to send a message</span>
            {"\n"}
            <span className="hljs-function">
              <span className="hljs-keyword">def</span>{" "}
              <span className="hljs-title">send_message</span>
              <span className="hljs-params">(message)</span>:
            </span>
            {"\n"}
            {"    "}ser.write(message.encode()){"  "}
            <span className="hljs-comment">
              # Convert the message to bytes and send
            </span>
            {"\n"}
            {"    "}time.sleep(<span className="hljs-number">1</span>)
            {"                "}
            <span className="hljs-comment"># Wait for a second</span>
            {"\n"}
            {"\n"}
            <span className="hljs-comment">
              # Example message used for testing purposes
            </span>
            {"\n"}
            <span className="hljs-comment"># testMessage = "Hello world"</span>
            {"\n"}
            {"\n"}
            <span className="hljs-function">
              <span className="hljs-keyword">def</span>{" "}
              <span className="hljs-title">ocr</span>
              <span className="hljs-params">()</span>:
            </span>
            {"\n"}
            {"    "}headers = {"{"}
            {"\n"}
            {"        "}
            <span className="hljs-string">"Content-Type"</span>:{" "}
            <span className="hljs-string">"application/json"</span>,{"\n"}
            {"        "}
            <span className="hljs-string">"Authorization"</span>: f
            <span className="hljs-string">
              "Bearer {"{"}api_key{"}"}"
            </span>
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-comment">
              # Define the information sent to GPT4o
            </span>
            {"\n"}
            {"    "}payload = {"{"}
            {"\n"}
            {"        "}
            <span className="hljs-string">"model"</span>:{" "}
            <span className="hljs-string">"gpt-4o"</span>,{"\n"}
            {"        "}
            <span className="hljs-string">"messages"</span>: [{"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"                "}
            <span className="hljs-string">"role"</span>:{" "}
            <span className="hljs-string">"user"</span>,{"\n"}
            {"                "}
            <span className="hljs-string">"content"</span>: [{"\n"}
            {"                    "}
            {"{"}
            {"\n"}
            {"                        "}
            <span className="hljs-string">"type"</span>:{" "}
            <span className="hljs-string">"text"</span>,{"\n"}
            {"                        "}
            <span className="hljs-string">"text"</span>:{" "}
            <span className="hljs-string">
              "You are a image to text OCR engine. Output the text you see in this
              image, and nothing else. Only use lowercase letters and no punctuation."
            </span>
            {"\n"}
            {"                    "}
            {"}"},{"\n"}
            {"                    "}
            {"{"}
            {"\n"}
            {"                        "}
            <span className="hljs-string">"type"</span>:{" "}
            <span className="hljs-string">"image_url"</span>,{"\n"}
            {"                        "}
            <span className="hljs-string">"image_url"</span>: {"{"}
            {"\n"}
            {"                            "}
            <span className="hljs-string">"url"</span>: f
            <span className="hljs-string">
              "data:image/jpeg;base64,{"{"}base64_image{"}"}"
            </span>
            {"\n"}
            {"                        "}
            {"}"}
            {"\n"}
            {"                    "}
            {"}"}
            {"\n"}
            {"                "}]{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"        "}],{"\n"}
            {"        "}
            <span className="hljs-string">"max_tokens"</span>:{" "}
            <span className="hljs-number">300</span>
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-comment"># Query the engine</span>
            {"\n"}
            {"    "}response = requests.post(
            <span className="hljs-string">
              "https://api.openai.com/v1/chat/completions"
            </span>
            , headers=headers, json=payload){"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-comment"># Extract its response</span>
            {"\n"}
            {"    "}
            <span className="hljs-keyword">return</span> response.json()[
            <span className="hljs-string">&apos;choices&apos;</span>][
            <span className="hljs-number">0</span>][
            <span className="hljs-string">&apos;message&apos;</span>][
            <span className="hljs-string">&apos;content&apos;</span>]{"\n"}
            {"\n"}
            <span className="hljs-keyword">try</span>:{"\n"}
            {"    "}message = ocr(){"\n"}
            {"    "}send_message(message){"\n"}
            {"    "}print(f
            <span className="hljs-string">
              "Message sent: {"{"}message{"}"}"
            </span>
            ){"\n"}
            <span className="hljs-keyword">except</span> Exception{" "}
            <span className="hljs-keyword">as</span> e:{"\n"}
            {"    "}print(f
            <span className="hljs-string">
              "Error: {"{"}e{"}"}"
            </span>
            ){"\n"}
            <span className="hljs-keyword">finally</span>:{"\n"}
            {"    "}ser.close(){"  "}
            <span className="hljs-comment"># Close the serial port</span>
            {"\n"}
          </code>
        </pre>
        <h3 id="text-to-braille-mapping">Text to Braille Mapping</h3>
        <p>
          The Raspberry Pi sends a byte-encoded text string to the ATTiny1614. From
          there, the ATTiny1614 is responsible for interpreting and converting the
          received text into braille dot arrays, which it then shows on the 3x2 array.
        </p>
        <p>
          The following program first sets up the configuration of solenodis and
          corresponding GPIOs, then creates the arrays of 0s and 1s (solenoid up or
          down) that forms a single braille character. It then maps each letter to its
          corresponding letter braille array.
        </p>
        <p>
          Upon the script&apos;s setup, each relevant pin is configured to be OUTPUT, and a
          serial connection with the Raspberry Pi is initialized.{" "}
        </p>
        <p>
          The script then continuously waits for an incoming string sent through
          Serial. Upon receiving the text, it is converted into an array of
          characters. The parse_input_string() method then does the heavy lifting and
          fetches the correct braille dot arrays. The method then iterates through
          each letter and represents that character&apos;s corresponding braille for one
          second on the physical solenoid array.
        </p>
        <p>
          The activate_solenoids() and deactivate_solenoids() methods were used for
          debugging purposes, turning all solenoids on or off, respectively.
        </p>

          <code className="lang-cpp">
            <span className="hljs-comment">
              /*{"\n"}
              {"  "}Solenoid arrangement:{"\n"}
              {"  "}0 1{"\n"}
              {"  "}2 3{"\n"}
              {"  "}4 5{"\n"}*/
            </span>
            {"\n"}
            {"\n"}int sols[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-number">9</span>,{" "}
            <span className="hljs-number">8</span>
            {"}"};{" "}
            <span className="hljs-comment">
              // Define the pins connected to the solenoids
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-comment">// Define the Braille arrays</span>
            {"\n"}int a[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int b[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int c[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int d[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int e[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int f[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int g[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int h[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int i[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int j[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int k[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int l[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int m[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int n[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int o[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int p[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int q[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int r[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int s[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int t[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}int u[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}int v[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}int w[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}int x[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}int y[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}int z[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}
            {"\n"}int space[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"};{"\n"}
            {"\n"}int number_sign[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>
            {"}"};{"\n"}int num_1[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as a</span>
            {"\n"}int num_2[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as b</span>
            {"\n"}int num_3[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as c</span>
            {"\n"}int num_4[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as d</span>
            {"\n"}int num_5[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as e</span>
            {"\n"}int num_6[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as f</span>
            {"\n"}int num_7[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as g</span>
            {"\n"}int num_8[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as h</span>
            {"\n"}int num_9[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as i</span>
            {"\n"}int num_0[<span className="hljs-number">6</span>] = {"{"}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">1</span>
            {"}"}; <span className="hljs-comment">// Same as j</span>
            {"\n"}
            {"\n"}
            <span className="hljs-comment">
              // Define a structure to map characters to their Braille arrays
            </span>
            {"\n"}typedef struct {"{"}
            {"\n"}
            {"    "}char character;{"\n"}
            {"    "}int *braille_array;{"\n"}
            {"}"} BrailleMap;{"\n"}
            {"\n"}
            <span className="hljs-comment">// Create the mapping</span>
            {"\n"}BrailleMap braille_dictionary[] = {"{"}
            {"\n"}
            {"    "}
            {"{"}&apos;a&apos;, a{"}"}, {"{"}&apos;b&apos;, b{"}"}, {"{"}&apos;c&apos;, c{"}"}, {"{"}&apos;d&apos;, d{"}"},{" "}
            {"{"}&apos;e&apos;, e{"}"},{"\n"}
            {"    "}
            {"{"}&apos;f&apos;, f{"}"}, {"{"}&apos;g&apos;, g{"}"}, {"{"}&apos;h&apos;, h{"}"}, {"{"}&apos;i&apos;, i{"}"},{" "}
            {"{"}&apos;j&apos;, j{"}"},{"\n"}
            {"    "}
            {"{"}&apos;k&apos;, k{"}"}, {"{"}&apos;l&apos;, l{"}"}, {"{"}&apos;m&apos;, m{"}"}, {"{"}&apos;n&apos;, n{"}"},{" "}
            {"{"}&apos;o&apos;, o{"}"},{"\n"}
            {"    "}
            {"{"}&apos;p&apos;, p{"}"}, {"{"}&apos;q&apos;, q{"}"}, {"{"}&apos;r&apos;, r{"}"}, {"{"}&apos;s&apos;, s{"}"},{" "}
            {"{"}&apos;t&apos;, t{"}"},{"\n"}
            {"    "}
            {"{"}&apos;u&apos;, u{"}"}, {"{"}&apos;v&apos;, v{"}"}, {"{"}&apos;w&apos;, w{"}"}, {"{"}&apos;x&apos;, x{"}"},{" "}
            {"{"}&apos;y&apos;, y{"}"}, {"{"}&apos;z&apos;, z{"}"}, {"{"}&apos; &apos;, space{"}"},{"\n"}
            {"    "}
            {"{"}&apos;#&apos;, number_sign{"}"},{"\n"}
            {"    "}
            {"{"}&apos;<span className="hljs-number">1</span>&apos;, num_1{"}"}, {"{"}&apos;
            <span className="hljs-number">2</span>&apos;, num_2{"}"}, {"{"}&apos;
            <span className="hljs-number">3</span>&apos;, num_3{"}"}, {"{"}&apos;
            <span className="hljs-number">4</span>&apos;, num_4{"}"}, {"{"}&apos;
            <span className="hljs-number">5</span>&apos;, num_5{"}"},{"\n"}
            {"    "}
            {"{"}&apos;<span className="hljs-number">6</span>&apos;, num_6{"}"}, {"{"}&apos;
            <span className="hljs-number">7</span>&apos;, num_7{"}"}, {"{"}&apos;
            <span className="hljs-number">8</span>&apos;, num_8{"}"}, {"{"}&apos;
            <span className="hljs-number">9</span>&apos;, num_9{"}"}, {"{"}&apos;
            <span className="hljs-number">0</span>&apos;, num_0{"}"}
            {"\n"}
            {"}"};{"\n"}
            {"\n"}void setup() {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-comment">
              // Initialize the solenoid pins as output
            </span>
            {"\n"}
            {"    "}for (int i = <span className="hljs-number">0</span>; i &lt;{" "}
            <span className="hljs-number">6</span>; i++) {"{"}
            {"\n"}
            {"        "}pinMode(sols[i], OUTPUT);{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"  "}
            <span className="hljs-comment">//{"  "}PORTMUX.CTRLB = 0x01;</span>
            {"\n"}
            {"   "}Serial.begin(<span className="hljs-number">9600</span>);{"\n"}
            {"\n"}
            {"   "}while(!Serial){"{"}
            {"\n"}
            {"\n"}
            {"   "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}void activate_solenoids(int *braille_array) {"{"}
            {"\n"}
            {"    "}for (int i = <span className="hljs-number">0</span>; i &lt;{" "}
            <span className="hljs-number">6</span>; i++) {"{"}
            {"\n"}
            {"        "}digitalWrite(sols[i], braille_array[i]);{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}
            <span className="hljs-comment">
              // Function to parse the input string and activate solenoids
            </span>
            {"\n"}void parse_input_string(const char *input) {"{"}
            {"\n"}
            {"    "}int len = sizeof(braille_dictionary) / sizeof(BrailleMap);{"\n"}
            {"    "}for (int i = <span className="hljs-number">0</span>; i &lt;
            strlen(input); i++) {"{"}
            {"\n"}
            {"        "}for (int j = <span className="hljs-number">0</span>; j &lt;
            len; j++) {"{"}
            {"\n"}
            {"            "}if (braille_dictionary[j].character == input[i]) {"{"}
            {"\n"}
            {"                "}
            activate_solenoids(braille_dictionary[j].braille_array);{"\n"}
            {"                "}delay(<span className="hljs-number">1000</span>);{" "}
            <span className="hljs-comment">
              // Wait for a second before next character
            </span>
            {"\n"}
            {"                "}break;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"    "}deactivate_solenoids();{"\n"}
            {"}"}
            {"\n"}
            {"\n"}void deactivate_solenoids() {"{"}
            {"\n"}
            {"    "}for (int i = <span className="hljs-number">0</span>; i &lt;{" "}
            <span className="hljs-number">6</span>; i++) {"{"}
            {"\n"}
            {"        "}digitalWrite(sols[i], LOW);{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}void loop() {"{"}
            {"\n"}
            {"  "}if (Serial.available() &gt; <span className="hljs-number">0</span>){" "}
            {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-comment">// Read the incoming string</span>
            {"\n"}
            {"\n"}
            {"    "}String input = Serial.readString();{"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-comment">
              // Convert the String to a C-style string (char array)
            </span>
            {"\n"}
            {"    "}char inputArray[input.length() +{" "}
            <span className="hljs-number">1</span>];{"\n"}
            {"    "}input.toCharArray(inputArray, input.length() +{" "}
            <span className="hljs-number">1</span>);{"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-comment">
              // Call the parse_input_string function with the received string
            </span>
            {"\n"}
            {"    "}parse_input_string(inputArray);{"\n"}
            {"\n"}
            {"    "}
            <span className="hljs-comment">
              // Optional: Add a delay to avoid flooding the input
            </span>
            {"\n"}
            {"    "}delay(<span className="hljs-number">5000</span>);{" "}
            <span className="hljs-comment">
              // Wait for 5 seconds before repeating
            </span>
            {"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
        </code>

        <pre>
        </pre>
        <h3 id="assembly">Assembly</h3>
        <p>
          I first outlined the general setup of my final project. I secured each
          MOSFET to a corresponding battery pack and solenoid, and color-coded each
          MOSFET&apos;s trigger and GND wires. I organized them in such a way that toggling
          solenoid 1, 2, 3, 4, 5, then 6 would control each solenoid in a line.
        </p>
        <div className="text-center">
          <img src="../../pics/final/assembly/internal.jpg" width={600} />
        </div>
        <p>
          I then connected the color coded wire sets to the controller PCB, and tested
          turning all the solenoids on in the right order.
        </p>
        <div className="video-container">
          <video 
            controls
            width="100%"
            height="auto"
            preload="metadata"
          >
            <source 
              src="../../pics/final/assembly/solenoidsWorking.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          Lastly, I secured everything in place and put the cover on. This involved
          using Nitto tape to attach the PCB to the side wall, and using hot glue to
          secure the MOSFETs to the bottom and the solenoids to their respective
          places. The PCB on the side wall is circled in red in the image below, as it
          is somewhat difficult to see. Each MOSFET drive module is connected to the
          controller PCB through a set of respective color coded wire pairs. The
          top-left solenoid corresponds with both white wires, the top-right solenoid
          with dark blue, the mid-left solenoid with green, the mid-right solenoid
          with orange, the bottom-left solenoid with blue, and the bottom right
          solenoid with yellow. The color coded scheme makes it easier for me to
          detach individual wires for debugging and knowing which solenoid a specific
          wire corresponds to.
        </p>
        <div className="text-center">
          <img src="../../pics/final/assembly/integration.jpg" width={400} />
        </div>
        <p>I then ran another test to ensure everything still worked.</p>
        <div className="video-container">
          <video 
            controls
            width="100%"
            height="auto"
            preload="metadata"
          >
            <source 
              src="../../pics/final/assembly/solenoidsWorkingAttached.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          The assembly of the Raspberry Pi case is relatively simple. As the 3D print
          already has holes built in for USB wires, and a hole built in for the
          screen, all I really need to do is secure the Pi to the bottom and the
          screen to the top, then connect the wires. I used 4 M3 screws in the
          screw-holes that I designed to secure the Raspberry Pi screen to the top of
          the case. I then used hot glue to secure the Pi in place on the bottom of
          the case. The following image shows the case&apos;s top on the left, with the
          screwed-in screen connected to the Pi via the microHDMI port for data and
          the power cable. The Pi itself is shown on the right, with its power cable
          coming out of the left side box hole, and the ESP32CAM cable coming out of
          the bottom hole. The wires on the right side case hole are used for
          connecting the Pi&apos;s TX/RX, VCC, and GND with the BrailleBox&apos;s ATTiny1614
          PCB.
        </p>
        <div className="text-center">
          <img src="../../pics/final/assembly/piCaseIntegrated.jpg" width={400} />
        </div>
        <p>Here is the Pi case when closed.</p>
        <div className="text-center">
          <img src="../../pics/final/assembly/piCase.jpg" width={400} />
        </div>
        <h3 id="evaluation">Evaluation</h3>
        <p>My project is considered successful if it can:</p>
        <ul>
          <li>☑ Accurately extract text from a live image feed</li>
          <li>☑ Map the text to braille</li>
          <li>☑ Display the braille on the solenoid array</li>
        </ul>
        <h3 id="implications">Implications</h3>
        <p>
          There is existing technologies on the market that can convert text to
          braille in real time, but those are often expensive and not readily
          available to the public. My hope with this project is to create a product
          that can be cheaply produced and reach a wide audience.{" "}
        </p>
        <h3 id="lessons-learned">Lessons Learned</h3>
        <ul>
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
        <h2 id="final-product">Final Product</h2>
        <p>
          <strong>
            WARNING: The project video and slide (poster) are out of date and provide
            incorrect information about licensing. The current EULA is{" "}
            <a href="../license.txt">here</a>. By installing, accessing, or using the
            Product, you acknowledge that you have read this Agreement, understand it,
            and agree to be bound by its terms and conditions.
          </strong>
        </p>
        <h3 id="poster">Poster</h3>
        <div className="text-center">
          <img src="../../presentation.png" width={600} />
        </div>
        <h3 id="video">Video</h3>
        <div className="video-container">
          <video 
            controls
            width="100%"
            height="auto"
            preload="metadata"
          >
            <source 
              src="../../presentation.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 id="file-downloads">File Downloads</h2>
        <p>
          My files can be downloaded{" "}
          <a href="../../files/final/final.zip">
            <strong>here</strong>
          </a>
          .
        </p>
        <h2 id="second-heading">Second Heading</h2>
        <ul>
          <li>
            Unordered lists, and:
            <ol>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ol>
          </li>
          <li>More</li>
        </ul>
        <blockquote>
          <p>Blockquote</p>
        </blockquote>
        <p>
          And <strong>bold</strong>, <em>italics</em>, and even{" "}
          <em>
            italics and later <strong>bold</strong>
          </em>
          . Even <del>strikethrough</del>.{" "}
          <a href="https://markdowntohtml.com">A link</a> to somewhere.
        </p>
        <p>And code highlighting:</p>
        <pre>
          <code className="lang-js">
            <span className="hljs-keyword">var</span> foo ={" "}
            <span className="hljs-string">&apos;bar&apos;</span>;{"\n"}
            {"\n"}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">baz</span>
              <span className="hljs-params">(s)</span>{" "}
            </span>
            {"{"}
            {"\n"}
            {"   "}
            <span className="hljs-keyword">return</span> foo +{" "}
            <span className="hljs-string">&apos;:&apos;</span> + s;{"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <p>
          Or inline code like <code>var foo = &apos;bar&apos;;</code>.
        </p>
        <p>Or an image of bears</p>
        <p>
          <img src="http://placebear.com/200/200" alt="bears" />
        </p>
        <p>The end ...</p>
     </div>
   </div>
 );
};


export default DocsPage;
