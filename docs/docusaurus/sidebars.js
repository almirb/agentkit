/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  documentationSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Setup',
      items: ['setup/setup', 'setup/setup_development'],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['configuration/configure_agent_and_tools', 'configuration/configure_ui'],
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial/tutorial.md'],
    },
    {
      type: 'category',
      label: 'How it works',
      items: ['how_it_works/key_concepts', 'how_it_works/backend_flow'],
    },
    {
      type: 'category',
      label: 'Tool library',
      items: ['tool_library/tool_library', 'tool_library/sql_tool', 'tool_library/pdf_tool', 'tool_library/entertainer_expert_tools', 'tool_library/visualizer_tool', 'tool_library/summarizer_tool', 'tool_library/image_generation_tool', 'tool_library/template_tool'],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced/memory', 'advanced/optional_features', 'advanced/evaluation', 'advanced/aat_guidelines'],
    },
  ],
};

export default sidebars;
