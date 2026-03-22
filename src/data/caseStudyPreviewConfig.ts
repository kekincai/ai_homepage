export type CaseStudyPageKey =
  | 'requirements'
  | 'design'
  | 'interactive'
  | 'testing'
  | 'deployment'
  | 'maintenance';

export type CaseStudyPreviewConfigItem = {
  previewHref: string;
};

const requirementsPreview: CaseStudyPreviewConfigItem = {
  previewHref: 'https://chatgpt.com/s/t_69bfe0c986d88191bfebb4f5a6cfd515'
};

const designPreview: CaseStudyPreviewConfigItem = {
  previewHref: 'https://chatgpt.com/s/t_69bfe149bc7081918ed16548d9ce65b2'
};

const interactivePreview: CaseStudyPreviewConfigItem = {
  previewHref: 'https://chatgpt.com/s/t_69bdf3b49a548191a29e332153231e44'
};

const testingPreview: CaseStudyPreviewConfigItem = {
  previewHref: 'https://chatgpt.com/s/t_69bfe1be819081919b331dd79417f8d3'
};

const deploymentPreview: CaseStudyPreviewConfigItem = {
  previewHref: 'https://chatgpt.com/s/t_69bfe1f81a88819188e9426c6356f01a'
};

const maintenancePreview: CaseStudyPreviewConfigItem = {
  previewHref: 'https://chatgpt.com/s/t_69bfe22e373c819186e9cc67028186f8'
};

export const caseStudyPreviewConfig: Record<CaseStudyPageKey, CaseStudyPreviewConfigItem> = {
  requirements: requirementsPreview,
  design: designPreview,
  interactive: interactivePreview,
  testing: testingPreview,
  deployment: deploymentPreview,
  maintenance: maintenancePreview
};
