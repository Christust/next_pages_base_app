export default function AboutPage() {
  const experienceFrontenJobs = [
    "HTML",
    "CSS",
    "JavaScript",
    "Sass",
    "Datepickers",
    "Bootstrap",
    "Fontawesome",
    "ApexCharts",
    "Axios",
    "Vue",
    "Vuex",
    "Vuelidate",
  ];
  const experienceFrontenPersonal = [
    "Tailwind",
    "Material UI",
    "Formik",
    "Yup",
    "Angular",
    "React",
    "NextJs",
  ];
  const experienceBackendJobs = [
    "PHP",
    "Ruby",
    "SQL",
    "MVC",
    "Laravel",
    "Ruby on Rails",
    "PostgreSQL",
  ];
  const experienceBackendPersonal = [
    "Python",
    "Django",
    "DjangoRestFramework",
    "Swagger",
    "JWT",
    "Auth",
  ];
  return (
    <>
      <main>
        <div>
          <div className="mb-5">
            <h5>Christos Osvaldo Marroquin Valdez.</h5>
            <h6>Programador Fullstack.</h6>
            <h6>Tel: 8126321225.</h6>
            <hr />
            <h5>Descripción.</h5>
            <p className="textJustified">
              Soy un programador fullstack poco mas que junior a mi parecer,
              tengo por objetivo seguirme capacitando en mi stack de tecnologias
              asi como en las nuevas herramientas que puedan surgir y
              representen nuevas oportunidades. Mi stack de tecnologias lo
              intento mantener en constante desarollo y practica cada que tengo
              la oportunidad, asi como el realizar proyectos con nuevos stacks
              tanto de frontend como de backend en mi tiempo libre.
            </p>
          </div>
          <div className="mb-5">
            <h5>Portafolio</h5>
            <hr />
            <a href="https://github.com/Christust">
              https://github.com/Christust
            </a>
          </div>
          <div className="mb-5">
            <h5>Experiencia</h5>
            <hr />
            <p className="textJustified">
              Eh participado en proyectos tanto de Frontend como de Backend.
            </p>
            <p className="textJustified">
              En el area de Frontend eh realizado proyectos que incluyen: diseño
              responsivo, desarrollos con Vue, conección a API's con Axios,
              Bootstrap, CRUDs y uso de librerias especificas como ApexCharts y
              Fontawesome.
            </p>
            <p className="textJustified">
              En el area de Backend eh realizado proyectos que incluyen: MVC,
              desarrollos con Rails on Rails, manejo de ORM, Autenticación,
              CRUDs y debuggeo mediante consola.
            </p>
            <p className="textJustified">
              Dentro de mis experiencias en el area de la programación tanto
              laboral como por proyectos personales puedo agregar lo siguiente
              (Enlistare desde lo mas basico a lo mas robusto e indicare cuales
              sean personales y laborales):
            </p>
          </div>
          <div className="row justify-content-around mb-5">
            <div className="col-12">
              <h6 className="m-0">
                <b>Frontend</b>
              </h6>
              <div className="d-flex justify-content-around my-4">
                <div className="card cardGradient shadow p-3 col-5">
                  <div className="card-body">
                    <h5 className="card-title">Laborales</h5>
                    <div className="card-text">
                      <ul>
                        {experienceFrontenJobs.map((exp, index) => (
                          <li key={exp + index}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card cardGradient shadow p-3 col-5">
                  <div className="card-body">
                    <h5 className="card-title">Personales</h5>
                    <div className="card-text">
                      <ul>
                        {experienceFrontenPersonal.map((exp, index) => (
                          <li key={exp + index}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h6 className="m-0">
                <b>Backend</b>
              </h6>
              <div className="d-flex justify-content-around my-4">
                <div className="card cardGradient shadow p-3 col-5">
                  <div className="card-body">
                    <h5 className="card-title">Laborales</h5>
                    <div className="card-text">
                      <ul>
                        {experienceBackendJobs.map((exp, index) => (
                          <li key={exp + index}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card cardGradient shadow p-3 col-5">
                  <div className="card-body">
                    <h5 className="card-title">Personales</h5>
                    <div className="card-text">
                      <ul>
                        {experienceBackendPersonal.map((exp, index) => (
                          <li key={exp + index}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
