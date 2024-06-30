import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterContato extends Schema.Component {
  collectionName: 'components_footer_contatoes';
  info: {
    displayName: 'Contato';
    icon: 'phone';
    description: '';
  };
  attributes: {
    endereco: Attribute.String & Attribute.Required;
    emailDeContato: Attribute.Email & Attribute.Required;
    telefone: Attribute.String;
  };
}

export interface FooterConteudo extends Schema.Component {
  collectionName: 'components_footer_conteudos';
  info: {
    displayName: 'Conte\u00FAdo';
    icon: 'stack';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    links: Attribute.Component<'menu.menu-links', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
  };
}

export interface FooterPaginas extends Schema.Component {
  collectionName: 'components_footer_paginas';
  info: {
    displayName: 'P\u00E1ginas';
    icon: 'server';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    links: Attribute.Component<'menu.menu-links', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
  };
}

export interface FooterParagrafo extends Schema.Component {
  collectionName: 'components_footer_paragrafos';
  info: {
    displayName: 'Paragrafo';
    icon: 'pencil';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    descricao: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 450;
      }>;
  };
}

export interface FooterRedesSociais extends Schema.Component {
  collectionName: 'components_footer_redes_sociais';
  info: {
    displayName: 'Redes Sociais';
    icon: 'twitter';
  };
  attributes: {
    linkedin: Attribute.String;
    github: Attribute.String;
    instagram: Attribute.String;
    twitterX: Attribute.String;
    facebook: Attribute.String;
  };
}

export interface MenuMenuFixo extends Schema.Component {
  collectionName: 'components_menu_menu_fixos';
  info: {
    displayName: 'Menu Fixo';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 60;
      }>;
    links: Attribute.Component<'menu.menu-links', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
  };
}

export interface MenuMenuLinks extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'Menu Links';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.Text & Attribute.Required;
    rotulo: Attribute.String & Attribute.Required;
  };
}

export interface SectionCertificadosCarrossel extends Schema.Component {
  collectionName: 'components_section_certificados_carrossels';
  info: {
    displayName: 'Certificados Carrossel';
    icon: 'check';
    description: '';
  };
  attributes: {
    metadados: Attribute.Component<'section.metadados-da-secao'>;
  };
}

export interface SectionDestaques extends Schema.Component {
  collectionName: 'components_section_destaques';
  info: {
    displayName: 'Destaques';
    icon: 'star';
    description: '';
  };
  attributes: {
    Metadados: Attribute.Component<'section.metadados-da-secao'> &
      Attribute.Required;
    autorDestaque: Attribute.Relation<
      'section.destaques',
      'oneToOne',
      'api::autor.autor'
    >;
    autorTitulo: Attribute.String & Attribute.DefaultTo<'Autor'>;
    destaquesTitulo: Attribute.String & Attribute.DefaultTo<'Destaques'>;
  };
}

export interface SectionMetadadosDaSecao extends Schema.Component {
  collectionName: 'components_section_metadados_da_secaos';
  info: {
    displayName: 'metadados da se\u00E7\u00E3o';
    icon: 'book';
    description: '';
  };
  attributes: {
    nome: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    imagemDeFundo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionPremiosSlider extends Schema.Component {
  collectionName: 'components_section_premios_sliders';
  info: {
    displayName: 'Pr\u00EAmios Slider';
    icon: 'crown';
    description: '';
  };
  attributes: {
    Metadados: Attribute.Component<'section.metadados-da-secao'> &
      Attribute.Required;
  };
}

export interface SectionProjetosCarrossel extends Schema.Component {
  collectionName: 'components_section_projetos_carrossels';
  info: {
    displayName: 'Projetos Carrossel';
    icon: 'apps';
  };
  attributes: {
    metadados: Attribute.Component<'section.metadados-da-secao'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.contato': FooterContato;
      'footer.conteudo': FooterConteudo;
      'footer.paginas': FooterPaginas;
      'footer.paragrafo': FooterParagrafo;
      'footer.redes-sociais': FooterRedesSociais;
      'menu.menu-fixo': MenuMenuFixo;
      'menu.menu-links': MenuMenuLinks;
      'section.certificados-carrossel': SectionCertificadosCarrossel;
      'section.destaques': SectionDestaques;
      'section.metadados-da-secao': SectionMetadadosDaSecao;
      'section.premios-slider': SectionPremiosSlider;
      'section.projetos-carrossel': SectionProjetosCarrossel;
    }
  }
}
