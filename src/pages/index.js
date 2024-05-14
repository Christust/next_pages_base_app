export default function HomePage() {
  const frontendTecnologies = [
    "Nextjs - React",
    "Redux",
    "Bootstrap",
    "Axios",
    "Yup",
    "Formik",
    "Fontawesome",
    "Authgrads",
  ];
  const backendTecnologies = [
    "Django",
    "DjangoRestFramework",
    "SimpleJWT",
    "Swagger",
    "Sistema de autenticación",
    "CRUDs completos",
  ];
  return (
    <>
      <main>
        <div>
          <p>
            Este proyecto fue construido con la intención de que sirviera de
            practica para la implementación de diferentes tecnologias y
            herramientas de una forma concentrada.
          </p>
          <div className="d-flex justify-content-around my-5">
            <div className="card cardGradient shadow p-3 col-5">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <p className="card-text">
                  Para el frontend hasta el momento se esta utilizando lo
                  siguiente:
                </p>
                <ul>
                  {frontendTecnologies.map((tecnologie) => (
                    <li key={tecnologie}>{tecnologie}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card cardGradient shadow p-3 col-5">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <p className="card-text">
                  Para el backend hasta el momento se esta utilizando lo
                  siguiente:
                </p>
                <ul>
                  {backendTecnologies.map((tecnologie) => (
                    <li key={tecnologie}>{tecnologie}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
