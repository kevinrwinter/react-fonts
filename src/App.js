import "./App.css";

// fonts
// import "./fonts/feijoa-mediumitalic-opentype_bigfontsite.com.otf";
// import "./fonts/feijoa-medium-opentype_bigfontsite.com.otf";
// import "./fonts/feijoa-bold-opentype_bigfontsite.com.otf";

function App() {
  return (
    <div>
      <div className="App">
        <p className="euclid-light font-demo">
          This is Euclid Circular B Light <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä <br /> Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
        </p>
        <p className="euclid-regular font-demo">
          This is Euclid Circular B Regular <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä <br /> Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
        </p>
        <p className="euclid-medium font-demo">
          This is Euclid Circular B Medium <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä <br /> Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
          <p className="euclid-semibold font-demo">
            This is Euclid Circular B Semibold <br />
            <p className="demo">
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä <br /> Ö 0 1 2 3 4 5 6 7 8 9 10 11
            </p>
          </p>
          <p className="euclid-bold font-demo">
            This is Euclid Circular B Bold <br />
            <p className="demo">
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä <br /> Ö 0 1 2 3 4 5 6 7 8 9 10 11
            </p>
          </p>
        </p>

        <p className="euclid-medium lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="numerals euclid-regular">1984</p>
      </div>

      <div className="App">
        <p className="feijoa-medium font-demo">
          This is Feijoa Medium OpenType <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X <br /> Y Z Ä Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
        </p>
        <p className="feijoa-italic font-demo">
          This is Feijoa MediumItalic OpenType <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br /> Ä Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
        </p>
        <p className="feijoa-medium-italic font-demo">
          This is Feijoa Medium Italic <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br /> Ä Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
        </p>
        <p className="feijoa-bold font-demo">
          This is Feijoa Bold OpenType <br />
          <p className="demo">
            A B C D E F G H I J K L M N O P Q R S T U V W X <br /> Y Z Ä Ö 0 1 2 3 4 5 6 7 8 9 10 11
          </p>
        </p>

        <p className="feijoa-italic lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="numerals feijoa-medium">1984</p>
      </div>

      <div className="examples euclid-regular">
        <p>
          <span className="euclid-medium">Avointa niin</span> <span className="feijoa-italic">lähdekoodi</span> <br />
          <span className="euclid-semibold">kuin asennekin.</span>
        </p>
        <p>
          <span className="euclid-medium">Liity</span>{" "}
          <span className="feijoa-italic">
            teknisten <br /> taiturien
          </span>{" "}
          <span className="euclid-medium">joukkoon.</span>
        </p>
        <p>
          Olemme tinkimätön ja <br /> <span className="feijoa-italic"> mutkaton ohjelmistotalo</span>.<br />{" "}
          <span className="feijoa-medium-italic"> mutkaton ohjelmistotalo</span>.
        </p>
        <p>
          Toimimme tulkkina <br /> <span className="euclid-bold">asiakkaan bisneksen</span> ja <br />{" "}
          <span className="feijoa-italic">teknisen maailman välillä.</span>
        </p>
      </div>
    </div>
  );
}

export default App;
