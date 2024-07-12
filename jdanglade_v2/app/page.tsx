import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative min-h-screen justify-around border-2 pt-24 border-white">
      <header className="flex-1 flex-col relative justify-start border-2 border-red-500">
        <div className="flex sticky left-0 top-12 justify-center">Header</div>
      </header>
      <main className="flex-1 flex-col justify-start border-2 border-green-500">
        <div className="flex relative flex-col justify-start px-14">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            viverra leo mauris, at rutrum velit porttitor aliquet. Integer eu
            dui ac nisl feugiat convallis eget a dolor. Integer id sollicitudin
            urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            In id rutrum lorem. Donec feugiat tortor vel diam rutrum, sed varius
            turpis consequat. In ultrices sapien sit amet maximus convallis.
            Mauris in nisl risus. In feugiat, nulla eu tristique hendrerit,
            risus eros convallis lorem, sed varius nibh erat eu mauris.
          </p>
          <p>
            Suspendisse gravida imperdiet vulputate. Suspendisse potenti. Proin
            semper odio quis mauris efficitur, ut tristique odio bibendum.
            Praesent eget urna eu ligula ultrices viverra ac et ipsum. Etiam ut
            facilisis risus. Nullam aliquam tristique enim, id semper nibh
            viverra a. Curabitur feugiat, sem ut consequat fringilla, lectus
            justo vestibulum ante, eu dignissim nisi leo vel arcu. Pellentesque
            nulla justo, consectetur sit amet sagittis sed, sagittis non felis.
            Cras vestibulum blandit arcu, sit amet convallis metus dignissim
            nec. Donec sit amet maximus dui, et ultricies tellus. Etiam quis
            enim tincidunt, scelerisque odio sed, porta nulla. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Morbi ex ipsum, eleifend nec augue in, fermentum
            ullamcorper velit. Quisque interdum tincidunt lectus, nec rhoncus
            odio bibendum vel. Proin dictum sit amet tellus non efficitur.
            Vivamus diam ipsum, ullamcorper ullamcorper aliquet vel, fringilla
            ut erat. Aenean malesuada sit amet erat ut blandit. Nunc quis dui
          </p>
          <p>
            nec ex eleifend venenatis vitae nec lectus. Donec quis lorem
            condimentum, volutpat tellus sed, mattis lectus. Cras vitae dui eget
            purus aliquam fermentum. Sed enim risus, blandit non lacus vel,
            aliquam finibus nibh. Sed rhoncus sollicitudin molestie. Donec
            posuere aliquam neque. Etiam vestibulum orci eleifend enim
            ullamcorper euismod. Ut venenatis egestas lorem, rutrum pulvinar
            libero congue eu. Mauris ut mi leo. Mauris pellentesque fringilla
            dolor, sed cursus ipsum hendrerit vel. Mauris vitae ligula eu urna
            cursus pretium ac sit amet augue. Quisque vulputate condimentum
            augue, ut dictum turpis consequat nec. Duis efficitur ligula mi, non
            faucibus nisl suscipit semper. Duis fermentum maximus orci sed
            egestas. Suspendisse a est aliquam, egestas lorem eu, consectetur
            ipsum. Nulla ut finibus mauris. Vivamus vel porta purus. Sed
          </p>
          <p>
            consequat iaculis auctor. Maecenas dapibus nec odio vitae luctus.
            Cras consectetur nulla nec ligula mollis, nec malesuada tellus
            scelerisque. Vestibulum blandit lobortis pharetra. Aliquam sagittis
            pulvinar efficitur. Suspendisse massa metus, viverra et tortor eget,
            vulputate volutpat nunc. Vivamus in est eget ex porttitor dapibus.
            Nulla gravida nec ante in ornare. Pellentesque vitae faucibus nisi.
            Curabitur ut consequat nulla, quis egestas velit. Integer fermentum,
            odio quis euismod auctor, lectus quam imperdiet orci, et lacinia
            ipsum lorem at enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas viverra leo mauris, at rutrum velit
            porttitor aliquet. Integer eu dui ac nisl feugiat convallis eget a
          </p>
          <p>
            dolor. Integer id sollicitudin urna. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. In id rutrum lorem. Donec feugiat
            tortor vel diam rutrum, sed varius turpis consequat. In ultrices
            sapien sit amet maximus convallis. Mauris in nisl risus. In feugiat,
            nulla eu tristique hendrerit, risus eros convallis lorem, sed varius
            nibh erat eu mauris. Suspendisse gravida imperdiet vulputate.
            Suspendisse potenti. Proin semper odio quis mauris efficitur, ut
            tristique odio bibendum. Praesent eget urna eu ligula ultrices
            viverra ac et ipsum. Etiam ut facilisis risus. Nullam aliquam
            tristique enim, id semper nibh viverra a. Curabitur feugiat, sem ut
            consequat fringilla, lectus justo vestibulum ante, eu dignissim nisi
            leo vel arcu. Pellentesque nulla justo, consectetur sit amet
            sagittis sed, sagittis non felis. Cras vestibulum blandit arcu, sit
            amet convallis metus dignissim nec. Donec sit amet maximus dui, et
            ultricies tellus. Etiam quis enim tincidunt, scelerisque odio sed,
            porta nulla. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Morbi ex ipsum, eleifend nec
            augue in, fermentum ullamcorper velit. Quisque interdum tincidunt
            lectus, nec rhoncus odio bibendum vel. Proin dictum sit amet tellus
            non efficitur. Vivamus diam ipsum, ullamcorper ullamcorper aliquet
            vel, fringilla ut erat. Aenean malesuada sit amet erat ut blandit.
            Nunc quis dui nec ex eleifend venenatis vitae nec lectus. Donec quis
            lorem condimentum, volutpat tellus sed, mattis lectus. Cras vitae
          </p>
          <p>
            dui eget purus aliquam fermentum. Sed enim risus, blandit non lacus
            vel, aliquam finibus nibh. Sed rhoncus sollicitudin molestie. Donec
            posuere aliquam neque. Etiam vestibulum orci eleifend enim
            ullamcorper euismod. Ut venenatis egestas lorem, rutrum pulvinar
            libero congue eu. Mauris ut mi leo. Mauris pellentesque fringilla
            dolor, sed cursus ipsum hendrerit vel. Mauris vitae ligula eu urna
            cursus pretium ac sit amet augue. Quisque vulputate condimentum
            augue, ut dictum turpis consequat nec. Duis efficitur ligula mi, non
            faucibus nisl suscipit semper. Duis fermentum maximus orci sed
            egestas. Suspendisse a est aliquam, egestas lorem eu, consectetur
            ipsum. Nulla ut finibus mauris. Vivamus vel porta purus. Sed
            consequat iaculis auctor. Maecenas dapibus nec odio vitae luctus.
            Cras consectetur nulla nec ligula mollis, nec malesuada tellus
            scelerisque. Vestibulum blandit lobortis pharetra. Aliquam sagittis
            pulvinar efficitur. Suspendisse massa metus, viverra et tortor eget,
            vulputate volutpat nunc. Vivamus in est eget ex porttitor dapibus.
            Nulla gravida nec ante in ornare. Pellentesque vitae faucibus nisi.
            Curabitur ut consequat nulla, quis egestas velit. Integer fermentum,
            odio quis euismod auctor, lectus quam imperdiet orci, et lacinia
            ipsum lorem at enim.
          </p>
        </div>
      </main>
    </div>
  );
}
