import './Acronym.css'

const acronyms = {
  'ONA': 'Organização Nacional de Acreditação',
  'CAPA': 'Ações Corretivas e Preventivas',
  'RCA': 'Análise de Causa Raiz (Root Cause Analysis)',
  'LGPD': 'Lei Geral de Proteção de Dados',
  'PNSP': 'Programa Nacional de Segurança do Paciente',
  'NSP': 'Núcleo de Segurança do Paciente',
  'RDC 36': 'Resolução da Diretoria Colegiada nº 36 — Anvisa',
  'ISO 31000': 'Norma Internacional de Gestão de Riscos',
  'ISO 9001': 'Norma Internacional de Gestão da Qualidade',
  'ISO/IEC 42001': 'Norma Internacional de Governança de IA',
  'BSC': 'Balanced Scorecard — Indicadores Estratégicos',
  'KPI': 'Key Performance Indicator — Indicador-Chave de Desempenho',
  'SLA': 'Service Level Agreement — Acordo de Nível de Serviço',
  'NPS': 'Net Promoter Score — Índice de Satisfação do Cliente',
  'LMS': 'Learning Management System — Sistema de Gestão de Aprendizagem',
  'RBAC': 'Role-Based Access Control — Controle de Acesso por Perfil',
  'MFA': 'Multi-Factor Authentication — Autenticação Multifator',
  'DPO': 'Data Protection Officer — Encarregado de Proteção de Dados',
  'PPT': 'PowerPoint — Apresentação de Slides',
  'PDF': 'Portable Document Format — Documento Portátil',
  'IA': 'Inteligência Artificial',
  'P.O.': 'Planejamento Orçamentário',
  'HIS': 'Hospital Information System — Sistema de Informação Hospitalar',
  'GLPI': 'Gestionnaire Libre de Parc Informatique — Sistema de Helpdesk',
  'API': 'Application Programming Interface — Interface de Programação',
  'RAG': 'Retrieval-Augmented Generation — Geração com Recuperação de Dados',
  'BI': 'Business Intelligence — Inteligência de Negócios',
  'Tasy': 'Sistema de Gestão Hospitalar — Philips/Oracle',
}

export default function Acronym({ children }) {
  const text = typeof children === 'string' ? children : ''
  const description = acronyms[text]

  if (!description) {
    return <span>{children}</span>
  }

  return (
    <span className="acronym-tooltip" data-tooltip={description}>
      {children}
      <span className="acronym-dot" aria-hidden="true"></span>
    </span>
  )
}

export { acronyms }
