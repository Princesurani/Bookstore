import { Button } from "@material-ui/core";

export default function Contact() {
  return (
    <section>

      <h1 class="center">contact us for any query</h1>
      <Button variant="contained" onClick={() => window.location = 'mailto:suraniprince007@gmail.com'}>
        E-mail us
        </Button>
        <p>feel free t ask anything</p>
        
    </section>
  );
}