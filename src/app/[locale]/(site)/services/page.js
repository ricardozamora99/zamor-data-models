export default function ServicesPage() {
  return (
    <main>
      <section>
        <h1>Servicios</h1>

        <p>
          Ofrecemos soluciones avanzadas de datos, automatización, análisis y
          herramientas de decisión, diseñadas para transformar tus datos en
          decisiones estratégicas y operativas.
        </p>

        {/* Hotelería y Turismo */}
        <h2>Hotelería y Turismo</h2>
        <ul>
          <li><strong>Forecast de ocupación hotelera</strong>: Proyección de ocupación por temporada para optimizar tarifas y recursos.</li>
          <li><strong>Optimización de precios dinámicos</strong>: Ajuste en tiempo real de precios basado en demanda.</li>
          <li><strong>Análisis de comentarios de huéspedes</strong>: NLP para extraer insights de las opiniones.</li>
          <li><strong>Dashboard de satisfacción por perfil</strong>: Visualizaciones para decisiones operativas.</li>
          <li><strong>Segmentación de turistas</strong>: Agrupación de perfiles para campañas personalizadas.</li>
          <li><strong>Automatización de reportes de ingresos</strong>: Reportes periódicos sin intervención manual.</li>
          <li><strong>Modelo de predicción de cancelaciones</strong>: Identificación de patrones de cancelación.</li>
          <li><strong>Integración de plataformas de reserva</strong>: Consolidación de datos de OTA’s para análisis.</li>
        </ul>

        {/* Educación en Línea */}
        <h2>Educación en Línea</h2>
        <ul>
          <li><strong>Modelo de abandono de cursos</strong>: Predicción de deserción estudiantil.</li>
          <li><strong>Dashboard de progreso académico</strong>: Métricas en tiempo real para tutores y administradores.</li>
          <li><strong>Clusterización de estilos de aprendizaje</strong>: Tipificación de estudiantes por comportamiento.</li>
          <li><strong>Automatización de reportes de desempeño</strong>: Reportes periódicos sin intervención manual.</li>
          <li><strong>Evaluación automática de ejercicios</strong>: Integración de scoring avanzado con ML.</li>
          <li><strong>Sistema de alertas de riesgo</strong>: Notificaciones tempranas para atención de estudiantes.</li>
          <li><strong>Insights de satisfacción de contenidos</strong>: Análisis semántico de feedback.</li>
          <li><strong>Sistema de recomendación de rutas de aprendizaje</strong>: Personalización de trayectorias formativas.</li>
        </ul>

        {/* Energías Renovables */}
        <h2>Energías Renovables</h2>
        <ul>
          <li><strong>Forecast de producción energética</strong>: Proyección por hora de producción solar y eólica.</li>
          <li><strong>Análisis de eficiencia de paneles/turbinas</strong>: Identificación de oportunidades de mejora.</li>
          <li><strong>Modelos predictivos de fallo</strong>: Alertas tempranas de mantenimiento predictivo.</li>
          <li><strong>Automatización de reportes regulatorios</strong>: Documentación consistente y entregable.</li>
          <li><strong>Dashboard operativo de sitios</strong>: Métricas clave de producción centralizadas.</li>
          <li><strong>Análisis de impacto climático</strong>: Correlación de producción con variables clima.</li>
          <li><strong>Integración de IoT</strong>: Sensores integrados para datos en tiempo real.</li>
          <li><strong>Sistema de alertas de mantenimiento</strong>: Notificaciones automáticas para equipos críticos.</li>
        </ul>

        {/* Industria Manufacturera */}
        <h2>Industria Manufacturera</h2>
        <ul>
          <li><strong>Detección de defectos con ML</strong>: Modelos para anticipar fallas de producción.</li>
          <li><strong>Optimización automatizada de inventarios</strong>: Control de stock con pronóstico avanzado.</li>
          <li><strong>Visión computarizada para control de calidad</strong>: Automatización de inspección visual.</li>
          <li><strong>Dashboard OEE</strong>: Métricas de efectividad global en un solo lugar.</li>
          <li><strong>Análisis de causa raíz</strong>: Diagnóstico de problemas recurrentes.</li>
          <li><strong>Simulación de procesos</strong>: Proyección de escenarios operativos.</li>
          <li><strong>Integración de sensores industriales</strong>: Datos de planta en tiempo real.</li>
          <li><strong>Alertas de desviación operativa</strong>: Sistema de notificaciones inteligentes.</li>
        </ul>

        {/* Seguridad Pública / Gobierno */}
        <h2>Seguridad Pública & Gobierno</h2>
        <ul>
          <li><strong>Predicción de zonas de riesgo</strong>: Modelos geoespaciales para seguridad.</li>
          <li><strong>Dashboard ciudadano de métricas</strong>: Transparencia y métricas en tiempo real.</li>
          <li><strong>Clusterización de incidentes</strong>: Identificación de patrones por zona.</li>
          <li><strong>Análisis de tiempos de respuesta</strong>: Optimización de recursos de emergencia.</li>
          <li><strong>Automatización de reportes públicos</strong>: Generación automática de documentación oficial.</li>
          <li><strong>Integración de cámaras con analítica</strong>: Visión analítica aplicada a vigilancia.</li>
          <li><strong>Sistema de alertas tempranas</strong>: Notificaciones automáticas para autoridades competentes.</li>
          <li><strong>Análisis de movilidad urbana</strong>: Tendencias de tráfico y congestión en tiempo real.</li>
        </ul>

        {/* Agricultura Digital */}
        <h2>Agricultura Digital</h2>
        <ul>
          <li><strong>Pronóstico de rendimiento de cultivos</strong>: Modelos basados en historiales y clima.</li>
          <li><strong>Análisis de sensores de campo</strong>: Integración de datos climáticos y de suelo.</li>
          <li><strong>Predicción de plagas</strong>: Algoritmos para detectar riesgo de infestaciones.</li>
          <li><strong>Dashboard de métricas agronómicas</strong>: Información relevante de campos y lotes.</li>
          <li><strong>Análisis geoespacial con satélites</strong>: Insights a nivel de terreno a partir de imágenes.</li>
          <li><strong>Alertas por condiciones críticas</strong>: Sistema de notificación automática de clima extremo.</li>
          <li><strong>Modelos de eficiencia de fertilización</strong>: Recomendaciones de insumos según datos.</li>
          <li><strong>Sistema de recomendación de siembra</strong>: Sugerencias basadas en datos climáticos y de suelo.</li>
        </ul>

    {/* Estrategia de datos */}
        <h2>Estrategia de Datos & Gobernanza</h2>
        <ul>
          <li><strong>Estrategia de datos corporativa:</strong> Hoja de ruta de datos alineada a objetivos de negocio.</li>
          <li><strong>Gobernanza y roles de datos:</strong> Definición de políticas, responsabilidades y procesos.</li>
          <li><strong>Arquitectura de datos empresarial:</strong> Blueprint de datos para escalabilidad y claridad.</li>
          <li><strong>Auditoría de calidad de datos:</strong> Evaluación de exactitud, integridad y consistencia.</li>
          <li><strong>Planes de mitigación de deuda técnica:</strong> Reducción de problemas estructurales de datos.</li>
          <li><strong>Catálogo cognitivo de datos:</strong> Inventario de fuentes de datos y su significado.</li>
          <li><strong>Madurez de datos:</strong> Roadmap para escalar capacidades analíticas.</li>
          <li><strong>Estandarización de KPIs:</strong> Unificación de métricas en toda la organización.</li>
        </ul>

        {/* Analytics & Insights */}
        <h2>Analytics & Insights de Negocio</h2>
        <ul>
          <li><strong>Atribución de marketing:</strong> Modelo para medir impacto de cada canal.</li>
          <li><strong>Segmentación con clustering:</strong> Agrupación avanzada de clientes o usuarios.</li>
          <li><strong>Forecast de ventas:</strong> Proyección basada en tendencias y contextos.</li>
          <li><strong>Análisis de cohortes:</strong> Comparación de grupos de usuarios a lo largo del tiempo.</li>
          <li><strong>Tableros KPI con narrativas:</strong> Visualizaciones + insights explicativos.</li>
          <li><strong>Correlación multivariable:</strong> Análisis de factores que afectan el desempeño.</li>
          <li><strong>Benchmark competitivo externo:</strong> Comparación frente a mercado.</li>
          <li><strong>Storytelling con datos:</strong> Narrativas interpretables para equipos no técnicos.</li>
        </ul>

        {/* Modelado & Machine Learning */}
        <h2>Modelado Predictivo & Machine Learning</h2>
        <ul>
          <li><strong>Scoring de riesgo o crédito:</strong> Modelo predictivo para decisiones financieras.</li>
          <li><strong>Detección de fraude automatizada:</strong> Machine learning para alertas tempranas.</li>
          <li><strong>Predicción de churn:</strong> Identificación de clientes con riesgo de abandono.</li>
          <li><strong>Sistemas recomendadores:</strong> Recomendaciones para aumentar ventas o retención.</li>
          <li><strong>Forecasting avanzado:</strong> Modelos de series temporales complejas.</li>
          <li><strong>Clasificación de patrones atípicos:</strong> Detección de outliers de negocio.</li>
          <li><strong>Optimización de campañas:</strong> Automatización para seleccionar mejor audiencia.</li>
          <li><strong>Precios dinámicos con ML:</strong> Ajuste automático de precios según demanda.</li>
        </ul>

        {/* Automatización de Procesos */}
        <h2>Automatización de Procesos & Workflows</h2>
        <ul>
          <li><strong>Pipelines de datos automáticos:</strong> ETL/ELT sin intervención manual.</li>
          <li><strong>Integración de APIs empresariales:</strong> Conexión automatizada entre sistemas.</li>
          <li><strong>RPA para procesos administrativos:</strong> Robots que ejecutan tareas repetitivas.</li>
          <li><strong>Alertas por excepciones de datos:</strong> Notificaciones inteligentes al detectar errores.</li>
          <li><strong>Reportes automatizados periódicos:</strong> Reportes sin intervención humana.</li>
          <li><strong>Dashboards con actualización automática:</strong> Visualizaciones siempre actualizadas.</li>
          <li><strong>MLOps para modelos en producción:</strong> Deploy + monitoreo continuo de modelos.</li>
          <li><strong>Validación automática de datasets:</strong> Chequeos de calidad antes de reportar.</li>
        </ul>

        {/* Arquitectura & Plataformas de Datos */}
        <h2>Arquitectura & Plataformas de Datos</h2>
        <ul>
          <li><strong>Arquitectura en la nube (AWS/GCP/Azure):</strong> Soluciones escalables y seguras.</li>
          <li><strong>Implementación de Data Warehouse:</strong> Repositorio centralizado para análisis.</li>
          <li><strong>Lakehouse / Data Mesh:</strong> Arquitecturas modernas para grandes organizaciones.</li>
          <li><strong>Orquestación de workflows:</strong> Control y calendarización con Airflow/Prefect.</li>
          <li><strong>Optimización de costos de infraestructura:</strong> Ajustes para eficiencia y ahorro.</li>
          <li><strong>Monitoreo de pipelines:</strong> Métricas de salud y performance.</li>
          <li><strong>Control de versiones de datasets:</strong> Reproducibilidad garantizada.</li>
          <li><strong>Seguridad de datos empresarial:</strong> Políticas y permisos de acceso granular.</li>
        </ul>

        {/* Data Products & Tools */}
        <h2>Data Products & Herramientas Técnicas</h2>
        <ul>
          <li><strong>Librerías internas para datos:</strong> Reutilizables y mantenibles para equipos.</li>
          <li><strong>APIs de datos custom:</strong> Endpoints para consumo interno y externo.</li>
          <li><strong>Interfaces web analíticas:</strong> Apps con dashboards y herramientas interactivas.</li>
          <li><strong>Portales de reporte automatizado:</strong> Acceso centralizado para stakeholders.</li>
          <li><strong>Conectores custom a fuentes de datos:</strong> Integración con sistemas no estándar.</li>
          <li><strong>Sistemas de metadatos inteligentes:</strong> Descubrimiento rápido de datasets.</li>
          <li><strong>Tools para interpretabilidad de ML:</strong> Explicabilidad de modelos complejos.</li>
          <li><strong>Simuladores de escenarios basados en datos:</strong> Herramientas para decisiones hipotéticas.</li>
        </ul>
      </section>
    </main>
  );
}
