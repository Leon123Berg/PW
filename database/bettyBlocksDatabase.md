# Betty Blocks Database

_Alle property-namen volgen de Benaming in Betty Blocks. `id`, `created_at` en `updated_at` worden automatisch gevuld door BB._

## Pwafbeeldingen
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| image | Afbeelding | File |
| created_at | Created at | Date time |
| id | Id | Serial |
| module | Module | List |
| titel | Titel | Text (single line) |
| unique | Uniek ID | Text (single line) |
| updated_at | Updated at | Date time |
| volgorde | Volgorde | Number |

**Relaties**
- Geen

## Pwoplossingen
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| afbeelding | Afbeelding | Image |
| beschrijving | Beschrijving | Text (multi line) |
| besparing | Besparing | List |
| besparing_gas_percentage | Besparing gas percentage | Number |
| created_at | Created at | Date time |
| id | Id | Serial |
| investering | Investering | List |
| type_oplossing | Type oplossing | Text (single line) |
| updated_at | Updated at | Date time |
| verbruik | Verbruik | Number |

**Relaties**
- `pwmodule3s` – Has many (`PWModule3s`)
- `pwoplossingenwoningtypen` – Has many (`PWOplossingenWoningtypen`)

## Pwoplossingenwoningtypen
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| gevuld | Gevuld | Checkbox |
| id | Id | Serial |
| prijs | Prijs | Price |
| subsidie | Subsidie | Price |
| updated_at | Updated at | Date time |
| verbruik_k_w_max | Verbruik kW max | Number |
| verbruik_k_w_min | Verbruik kW min | Number |

**Relaties**
- `pwoplossingen` – Belongs to (`PWOplossingen`)
- `pwwoningtype` – Belongs to (`PWWoningtype`)

## Pwproject
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| id | Id | Serial |
| duurzaamheids_rapport | Persoonlijk Duurzaamheidsrapport | PDF File |
| updated_at | Updated at | Date time |
| uuid | UUID | Text (single line) |

**Relaties**
- `company` – Belongs to (`Company`)
- `pwcustomer` – Belongs to (`PWCustomer`)
- `pwmodule1s` – Has many (`PWModule1s`)
- `pwmodule2s` – Has many (`PWModule2s`)
- `pwmodule3s` – Has many (`PWModule3s`)
- `pwmodule4s` – Has many (`PWModule4s`)
- `pwmodule5s` – Has many (`PWModule5s`)
- `pwoffertes` – Has many (`PWOFFertes`)
- `webuser` – Belongs to (`Webuser`)

## Pwsubsidie
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| id | Id | Serial |
| maximale_m2 | Maximale m2 | Number |
| minimale_m2 | Minimale m2 | Number |
| minimale_rd_waarde | Minimale RD-waarde | Number with decimal |
| subsidie_item | Subsidie item | List |
| subsidiebedrag_meer_m2 | Subsidiebedrag per meerdere m2 | Price |
| subsidiebedrag_een_m2 | Subsidiebedrag per enkele m2 | Price |
| updated_at | Updated at | Date time |

**Relaties**
- Geen

## Pwsubsidieberekening
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| dak_max | Dak max | Number with decimal |
| dak_min | Dak min | Number with decimal |
| id | Id | Serial |
| raamwerk_max | Raamwerk max | Number with decimal |
| raamwerk_min | Raamwerk min | Number with decimal |
| spouwmuur_max | Spouwmuur max | Number with decimal |
| spouwmuur_min | Spouwmuur min | Number with decimal |
| totaal_max | Totaal max | Number with decimal |
| totaal_min | Totaal min | Number with decimal |
| updated_at | Updated at | Date time |
| vloer_max | Vloer max | Number with decimal |
| vloer_min | Vloer min | Number with decimal |

**Relaties**
- `pwmodule2` – Belongs to (`PWModule2`)

## Pwtipsadvies
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| beschrijving | Beschrijving | Text (single line) |
| created_at | Created at | Date time |
| id | Id | Serial |
| kosten | Kosten | Number with decimal |
| standaard_tip | Standaard tip | List |
| updated_at | Updated at | Date time |

**Relaties**
- `pwmodule3s` – Has and belongs to many (`PWModule3s`)

## Pwwoningtype
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| active | Actief | Checkbox |
| bad | Bad | Text (single line) |
| besparing_bodemisolatie | Besparing bodemisolatie | Number |
| besparing_dakisolatie | Besparing dakisolatie | Number |
| besparing_gevelisolatie | Besparing gevelisolatie | Number |
| besparing_spouwmuurisolatie | Besparing spouwmuurisolatie | Number |
| besparing_vloerisolatie | Besparing vloerisolatie | Number |
| besparing_zolder_vliering_isolatie | Besparing zolder/vliering isolatie | Number |
| created_at | Created at | Date time |
| dakisolatie_oppervlakte | Dakisolatie oppervlakte | Number |
| douche | Douche | Text (single line) |
| id | Id | Serial |
| isolaties_gevuld | Isolaties gevuld? | Checkbox |
| leidingen | Leidingen | Number |
| meerdere_warm_waterpunten | Meerdere warm waterpunten | List |
| oppervlakte | Oppervlakte | Number |
| payload_code | Payload code | Text (single line) |
| raam_oppervlakte | Raam oppervlakte | Number |
| spouwmuur_dikte_cm | Spouwmuur dikte cm | Number |
| spouwmuur_oppervlakte | Spouwmuur oppervlakte | Number |
| standaard_energiebron | Standaard energiebron | Text (multi line) |
| svg_image | SVG image | Text (single line) |
| updated_at | Updated at | Date time |
| vloer_oppervlakte | Vloer oppervlakte | Number |
| woningtype | Woningtype | List |

**Relaties**
- `pwmodule1s` – Has many (`PWModule1s`)
- `pwoplossingenwoningtypen` – Has many (`PWOplossingenWoningtypen`)

## Pwzonnepaneelprijzen
**Modelinstellingen**
- Allow import: Ja
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| aantal | Aantal | Number |
| created_at | Created at | Date time |
| id | Id | Serial |
| kwh | kWh | Number |
| prijs | Prijs | Price |
| updated_at | Updated at | Date time |

**Relaties**
- `pwmodule4s` – Has many (`PWModule4s`)
- `webuser` – Belongs to (`Webuser`)

## Pwzonnepanelen
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| actief | Actief | Checkbox |
| beschrijving | Beschrijving | Text (single line) |
| capaciteit | Capaciteit | Number |
| created_at | Created at | Date time |
| id | Id | Serial |
| kosten | Kosten | Number |
| naam | Naam | Text (single line) |
| updated_at | Updated at | Date time |

**Relaties**
- `pwmodule4s` – Has many (`PWModule4s`)
- `pw_zonnepaneel_prijzens` – Has many (`PWZonnepaneelPrijzens`)

## Pwzonnepanelendakoppervlakte
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| aantal_panelen | Aantal panelen | Number |
| created_at | Created at | Date time |
| hellingspercentage | Hellingspercentage | Number |
| id | Id | Serial |
| updated_at | Updated at | Date time |
| vlak_dak | Vlak dak | Checkbox |

**Relaties**
- `pwmodule4` – Belongs to (`PWModule4`)

## User
**Modelinstellingen**
- Allow import: Ja
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee
- Opmerking: Backoffice gebruikt dit model.

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| active | Active | Checkbox |
| api_password | Api password | Login token |
| cas_token | Authentication Token | Login token |
| created_at | Created at | Date time |
| developer | Developer | Checkbox |
| email | E-mail address | Email address |
| id | Id | Serial |
| infobot_mail | Infobot mail | Checkbox |
| locale | Locale | List |
| invite_users | Mag backoffice gebruiken? | Checkbox |
| make_user_changes | Mag gebruiker wijzigen? | Checkbox |
| name | Name | Text (single line) |
| password | Password | Password |
| read_metadata | Read metadata | Checkbox |
| receives_notifications | Receives notifications | Checkbox |
| updated_at | Updated at | Date time |
| wasco_clientnumber | Wasco clientnumber | Text (single line) |
| webuser | Webuser? | Checkbox |

**Relaties**
- `roles` – Has and belongs to many (`Roles`)

## Webuser
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee
- Opmerking: Frontend gebruikt dit model.

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| active | Active? | Checkbox |
| created_at | Created at | Date time |
| email | Email | Email address |
| first_login | First login | Checkbox |
| hoofdgebruiker | Hoofdgebruiker | Checkbox |
| id | Id | Serial |
| initials | Initials | Text (single line) |
| last_login | Last login | Date time |
| name | Name | Text (single line) |
| password | Password | Password |
| password_reset_token | Password reset token | Text (single line) |
| phone_number | Phone number | Phone number |
| profile_picture | Profile picture | Image |
| projecten_gebruiker | Projecten gebruiker | List |
| reset_token_expiredate | Reset token expiredate | Date time |
| status | Status | List |
| testdate | Testdate | Date time |
| time_reset_token | Time reset token | Date time |
| type_gebruiker | Type gebruiker | List |
| updated_at | Updated at | Date time |
| create_project_allowed | Create project allowed | Checkbox |
| consumer | Consument | Checkbox |

**Relaties**
- `company` – Belongs to (`Company`)
- `customers` – Has many (`Customers`)
- `licenses` – Has many (`Licenses`)
- `projects` – Has many (`Projects`)
- `pwprojects` – Has many (`PWProjects`)
- `pwzonnepaneelprijzens` – Has many (`PWZonnepaneelPrijzens`)

## Company
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| accent_color | Accent color | Text (single line) |
| accent_color_dark | Accent color dark | Text (single line) |
| algemene_voorwaarden | Algemene voorwaarden | File |
| algemene_voorwaarden_url | Algemene voorwaarden url | Url |
| amount_of_projects | Amount of projects | Number |
| blocked | Blocked | Checkbox |
| btw_nummer | Btw nummer | Text (single line) |
| central_email | Central email | Checkbox |
| central_email_address | Central email address | Email address |
| city | City | Text (single line) |
| color | Color | Text (single line) |
| contrast_color | Contrast color | Text (single line) |
| contrast_color_dark | Contrast color dark | Text (single line) |
| contrast_color_light | Contrast color light | Text (single line) |
| country | Country | Text (single line) |
| created_at | Created at | Date time |
| email | Email | Email address |
| email_notification_queue | Email notification queue | Checkbox |
| email_notification_queue_active | Email notification queue active | Checkbox |
| gln_number | Gln number | Text (single line) |
| housenumber | Housenumber | Number |
| housenumber_addition | Housenumber addition | Text (single line) |
| iban | Iban | Text (single line) |
| iban_name | Iban name | Text (single line) |
| id | Id | Serial |
| knoptekst | Knoptekst | Text (single line) |
| kvk_nummer | Kvk nummer | Text (single line) |
| logo | Logo (digitaal) | Image |
| logo_paper | Logo paper | Image |
| name | Name | Text (single line) |
| phone_number | Phone number | Phone number |
| powered_by | Powered by | Text (single line) |
| registration_status | Registration status | List |
| street | Street | Text (single line) |
| testdate | Testdate | Date time |
| updated_at | Updated at | Date time |
| uuid | UUID | Text (single line) |
| wasco_clientnumber | Wasco clientnumber | Text (single line) |
| wasco_location | Wasco location | Text (single line) |
| website | Website | Url |
| zipcode | Zipcode | Text (single line) |

**Relaties**
- `configurations` – Has many (`Configurations`)
- `customers` – Has many (`Customers`)
- `favorietens` – Has many (`Favorietens`)
- `licenses` – Has many (`Licenses`)
- `projects` – Has many (`Projects`)
- `pw_projects` – Has many (`PWProjects`)
- `registration_requests` – Has many (`Registration requests`)
- `wascolocation` – Belongs to (`Wascolocation`)
- `webusers` – Has many (`Webusers`)

## Pwcustomer
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| achternaam | Achternaam | Text (single line) |
| bouwjaar | Bouwjaar | Number |
| budget | Budget | Number with decimal |
| created_at | Created at | Date time |
| delen_akkoord | Delen akkoord | Checkbox |
| eigen_inbreng | Eigen inbreng | Price |
| email | Email | Text (single line) |
| huisletter | Huisletter | Text (single line) |
| huisnummer | Huisnummer | Number |
| id | Id | Serial |
| kadaster_api_failed | Kadaster API mislukt | Checkbox |
| kadastar_api_failed_message | Kadastar API failed message | Text (multi line) |
| klantnaam | Klantnaam | Text expression (single line) |
| plaats | Plaats | Text (single line) |
| postcode | Postcode | Text (single line) |
| straatnaam | Straatnaam | Text (single line) |
| telefoonnummer | Telefoonnummer | Text (single line) |
| toelichting | Toelichting | Text (multi line) |
| toevoeging | Toevoeging | Text (single line) |
| tussenvoegsel | Tussenvoegsel | Text (single line) |
| updated_at | Updated at | Date time |
| verblijfsobject | Verblijfsobject | Text (single line) |
| voornaam | Voornaam | Text (single line) |
| woongegevens_opgehaald | Woongegevens opgehaald | Checkbox |
| kwh_prijs | Kwh prijs | number with decimal |
| gas_prijs | Gas prijs | number with decimal |

**Relaties**
- `pwprojects` – Has many (`PWProjects`)

## Pwfinancieringstabel
**Modelinstellingen**
- Allow import: Ja
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| extra_hypotheek | Extra hypotheek | Price |
| huidig_energielabel | Huidig energielabel | Text (single line) |
| id | Id | Serial |
| nieuw_energielabel | Nieuw energielabel | Text (single line) |
| updated_at | Updated at | Date time |
| verduurzamingshypotheek | Verduurzamingshypotheek | Price |
| waardestijging | Waardestijging | Number with decimal |

**Relaties**
- Geen

## Pwinstellingen
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| id | Id | Serial |
| updated_at | Updated at | Date time |
| waarde | Waarde | Number with decimal |
| waardetype | Waardetype | List |
| zichtbaar | Zichtbaar | Checkbox |

**Relaties**
- Geen

## Pwmodule1
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| aantal_zonnepanelen | Aantal aanwezige zonnepanelen | Number |
| berekende_gas_prijs | Berekende gasprijs | Price |
| berekende_kwh_prijs | Berekende kwh prijs | Price |
| bouwjaar | Bouwjaar | Number |
| created_at | Created at | Date time |
| energielabel_altum | Energielabel Altum | Text (single line) |
| energielabel_ep_online | Energielabel EP Online | Text (single line) |
| financiering | Financiering | List |
| gas_bedrag_per_jaar | Gas bedrag per jaar | Number with decimal |
| gas_eraf | Gas eraf | Checkbox |
| gas_per_jaar | Gas per jaar | Number |
| geschat_energielabel | Geschat energielabel | Checkbox |
| google_street_view_link | Google street view link | Text (single line) |
| huidig_energielabel | Huidig energielabel | List |
| huidige_energielasten | Huidige energielasten | Number with decimal |
| id | Id | Serial |
| inwoners | Inwoners | Number |
| ketelleeftijd | Ketelleeftijd | List |
| koken | Koken | List |
| kwh_bedrag_per_jaar | Kwh bedrag per jaar | Number with decimal |
| kwh_per_jaar | Kwh per jaar | Number |
| laadpaal | Laadpaal | List |
| oppervlakte_woning | Oppervlakte woning | Number |
| belangrijkste_reden_overig | Belangrijkste reden overig | Text (multi line) |
| redenen | Redenen | Text (single line) |
| renoveren | Renoveren | Checkbox |
| tapwater | Tapwater | List |
| toekomstige_energielasten | Toekomstige energielasten | Number with decimal |
| totaal_bedrag_energielasten | Totaal bedrag energielasten | Number with decimal |
| updated_at | Updated at | Date time |
| verschil_energielasten | Verschil energielasten | Number with decimal |
| verwarmen | Verwarmen | Text (single line) |
| vloerverwarming_aanwezig | Vloerverwarming aanwezig | Checkbox |
| volume | Volume | Number with decimal |
| woningtype_tekst | Woningtype tekst | Text (single line) |
| woonoppervlakte | Woonoppervlakte | Number |

**Relaties**
- `pwmultiplechoices` – Has and belongs to many (`PWMultipleChoices`)
- `pwproject` – Belongs to (`PWProject`)
- `woningtypes` – Belongs to (`Woningtypes`)

## Pwmodule2
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| created_at | Created at | Date time |
| dak | Dak | List |
| flat_roof_surface | Platdak oppervlakte | Number with decimal |
| floor_surface | Vloeroppervlakte | Number with decimal |
| glass_bedrooms_surface | Glasoppervlakte slaapkamers | Number with decimal |
| glass_living_room_surface | Glasoppervlakte woonkamer | Number with decimal |
| id | Id | Serial |
| inner_surface | Binnenoppervlakte | Number with decimal |
| isolaties_handmatig_aangepast | Isolaties handmatig aangepast | Checkbox |
| isoleer_dak | Isoleer dak | Checkbox |
| isoleer_muren | Isoleer muren | Checkbox |
| isoleer_ramen | Isoleer ramen | Checkbox |
| isoleer_vloer | Isoleer vloer | Checkbox |
| kosten_dak_isoleren | Kosten dak isoleren | Number with decimal |
| kosten_glas_vervangen | Kosten glas vervangen | Number with decimal |
| kosten_spouwmuren_isoleren | Kosten spouwmuren isoleren | Number with decimal |
| kosten_ventilatie_optimaliseren | Kosten ventilatie optimaliseren | Number with decimal |
| kosten_vloer_isoleren | Kosten vloer isoleren | Number with decimal |
| muren | Muren | List |
| muren_geschiedenis | Muren geschiedenis | List |
| nieuw_gasverbruik | Nieuw gasverbruik | Number with decimal |
| optimaliseer_ventilatie | Optimaliseer ventilatie | Checkbox |
| pitched_roof_surface | Schuindak oppervlakte | Number with decimal |
| ramen | Ramen | List |
| subsidie_totaal | Subsidie totaal | Price |
| totaal_isolatie | Totaal isolatie | List |
| updated_at | Updated at | Date time |
| ventilatie | Ventilatie | List |
| vloer | Vloer | List |
| vloer_geschiedenis | Vloer geschiedenis | List |
| wall_surface | Muuroppervlakte | Number with decimal |

**Relaties**
- `pwproject` – Belongs to (`PWProject`)
- `pwsubsidieberekenings` – Has many (`PwsubsidieBerekening`)

## Pwmodule3
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| besparing_gas | Besparing gas | Price |
| besparing_oplossing | Besparing oplossing | Price |
| created_at | Created at | Date time |
| dakisolatie_kosten | Dakisolatie kosten | Price |
| benodigde_kwh | Benodigde kwh | Number with decimal |
| extra_verbruik_wp_met_zonnepanelen | Extra verbruik wp met zonnepanelen | Number with decimal |
| extra_verbruik_wp_zonder_zonnepanelen | Extra verbruik wp zonder zonnepanelen | Number with decimal |
| id | Id | Serial |
| raamisolatie_kosten | Raamisolatie kosten | Price |
| muurisolatie_kosten | Spouwmuurisolatie kosten | Price |
| totaal_kosten_verbruik | Totaal kosten verbruik | Price |
| totaal_verbruik_kwh | Totaal verbruik kwh | Number with decimal |
| updated_at | Updated at | Date time |
| vloerisolatie_kosten | Vloerisolatie kosten | Price |
| vloerverwarming_kosten | Vloerverwarming kosten | Price |

**Relaties**
- `pwoplossingen` – Belongs to (`PWoplossingen`)
- `pwproject` – Belongs to (`PWProject`)
- `pwtipsadvies` – Has and belongs to many (`PWTipsAdvies`)

## Pwmodule4
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| aantal_zonnepanelen | Aantal zonnepanelen | Text (single line) |
| benodigde_kw_h | Benodigde Kwh | Text (single line) |
| benodigde_zonnepanelen | Benodigde zonnepanelen | Number |
| besparing_elektra | Besparing elektra | Number with decimal |
| created_at | Created at | Date time |
| error_message | Error message | Text (multi line) |
| error_message_extra | Error message extra info | Text (multi line) |
| error_novasole | Fout aanroepen NovaSole | Checkbox |
| gekozen_zonnepanelen | Gekozen zonnepanelen | Number |
| handmatig_gekozen_zonnepanelen | Handmatig gekozen zonnepanelen | Checkbox |
| id | Id | Serial |
| kosten | Kosten | Number with decimal |
| legplan | Legplan | Text (single line) |
| legplan_foto | Legplan foto | Image |
| legplan_foto_url | Legplan foto url | Text (single line) |
| max_zonnepanelen | Max zonnepanelen | Number |
| novasole_api_aangeroepen | NovaSole succesvol aangeroepen | Checkbox |
| opbrengst_euro | Opbrengst Euro | Number |
| opbrengst_kw_h | Opbrengst Kwh | Text (single line) |
| platdak | Platdak | Checkbox |
| response_code | Response code | Number |
| schuindak | Schuindak | Checkbox |
| subsidie | Subsidie | Number with decimal |
| updated_at | Updated at | Date time |

**Relaties**
- `pwproject` – Belongs to (`PWProject`)
- `pwzonnepaneelprijzen` – Belongs to (`PWZonnepaneelPrijzen`)
- `pwzonnepanelen` – Belongs to (`PWZonnepanelen`)
- `pwzonnepanelendaken` – Has many (`PwzonnepanelenDaken`)

## Pwmodule5
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Ja
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| adviseur_uitleggen | Adviseur uitleggen | Checkbox |
| aflossingsvrij_bedrag | Aflossingsvrij bedrag | Number with decimal |
| annuiteit_bedrag | Annuiteit bedrag | Number with decimal |
| bengscore | BENG-score | Text (single line) |
| beschrijving | Beschrijving | Text (multi line) |
| besparing_15_jaar | Besparing 15 jaar | Number with decimal |
| besparing_gas | Besparing gas | Number with decimal |
| besparing_gas_elektra | Besparing gas elektra | Number with decimal |
| besparing_per_jaar | Besparing per jaar | Number with decimal |
| besparing_per_maand | Besparing per maand | Number with decimal |
| besparing_stroom | Besparing stroom | Number |
| bomen | Bomen | Number |
| co2_verbetering | CO2 verbetering | Number |
| created_at | Created at | Date time |
| doorlooptijd_hypotheek | Doorlooptijd hypotheek | Number |
| eerste_keer_pagina_ingeladen | Eerste keer pagina geladen | Checkbox |
| email_verzonden | Email verzonden | Checkbox |
| extra_kosten_wp | Extra kosten wp | Number with decimal |
| id | Id | Serial |
| ingediend | Ingediend | Checkbox |
| lineair_bedrag | Lineair bedrag | Number with decimal |
| maatwerk_advies | Maatwerk advies | Checkbox |
| offertes_ontvangen | Offertes ontvangen? | Checkbox |
| rendement | Rendement | Number with decimal |
| rente_financiering | Rente financiering | List |
| rentepercentage | Rentepercentage | Number with decimal |
| schatting_te_ontvangen_subsidie | Schatting te ontvangen subsidie | Number with decimal |
| terugverdientijd | Terugverdientijd | Number with decimal |
| toelichting | Toelichting | Text (multi line) |
| totaal_besparingspercentage | Totaal besparingspercentage | Number |
| totale_bruto_investering | Totale bruto investering | Number with decimal |
| totale_netto_investering | Totale netto investering | Number with decimal |
| totale_uitvoering_eigenbeheer | Totale uitvoering eigen beheer | Checkbox |
| updated_at | Updated at | Date time |
| verwacht_energielabel | Verwacht energielabel | List |
| voldoende_kennis | Voldoende kennis | Checkbox |
| waardestijging | Waardestijging | Number |

**Relaties**
- Geen

## Pwmultiplechoice
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee
- Settingsmodel: Ja (records gedeeld tussen branches)

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| active | Actief | Checkbox |
| beschrijving | Beschrijving | Text (single line) |
| created_at | Created at | Date time |
| cv_ketel | Cv-Ketel | Checkbox |
| dom_value | DOM Value | Text (single line) |
| icon | Icon | Text (multi line) |
| id | Id | Serial |
| mptype | MPType | List |
| updated_at | Updated at | Date time |
| order | Volgorde | Number |
| value | Waarde | Number |
| zonnepanelen_aanwezig | Zonnepanelen aanwezig | Checkbox |

**Relaties**
- `livingsituationquestion` – Belongs to (`LivingSituationQuestion`)
- `pwmodule1s` – Has and belongs to many (`PWModule1s`)

## Pwofferte
**Modelinstellingen**
- Allow import: Nee
- Allow mass delete: Nee
- Log mutations: Nee
- Deduplicate: Nee

**Properties**
| Name | Label | Type |
| --- | --- | --- |
| airconditioning | Airconditioning | Checkbox |
| created_at | Created at | Date time |
| dak | Dak | Checkbox |
| id | Id | Serial |
| luchtreiniger | Luchtreiniger | Checkbox |
| muren | Muren | Checkbox |
| ramen | Ramen | Checkbox |
| updated_at | Updated at | Date time |
| vloer | Vloer | Checkbox |
| vloerverwarming | Vloerverwarming | Checkbox |
| warmtepomp | Warmtepomp | Checkbox |
| waterontharder | Waterontharder | Checkbox |
| zonnepanelen | Zonnepanelen | Checkbox |

**Relaties**
- Geen

