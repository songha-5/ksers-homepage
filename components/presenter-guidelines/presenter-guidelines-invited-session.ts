import {
  PPT_TEMPLATE_FILE_NAME,
  PPT_TEMPLATE_HREF,
} from "@/components/presenter-guidelines/presenter-guidelines-content";
import {
  presenterItem,
  presenterParagraph,
  presenterText,
  type PresenterSection,
} from "@/components/presenter-guidelines/presenter-guidelines-model";

export const INVITED_SESSION_SECTIONS: readonly PresenterSection[] = [
  {
    id: "ppt",
    title: "3. PPT Format",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "ppt-lead",
        items: [
          presenterParagraph("ppt-lead", [
            presenterText(
              "ppt-lead",
              "It is highly recommended that all speakers use the KSERS 2026 PPT format with COI (Conflict of Interest) Declaration when you make the presentaion files.",
            ),
          ]),
        ],
      },
      {
        kind: "list",
        id: "ppt-list",
        items: [
          presenterItem("template", [
            presenterText("template-label", "Template Download:"),
            // 二쇱꽍: ?섏젙?꾩슂. PPT ?쒗뵆由??뚯씪??援먯껜?쒕떎.
            {
              kind: "download",
              id: "template-file",
              href: PPT_TEMPLATE_HREF,
              fileName: PPT_TEMPLATE_FILE_NAME,
            },
          ]),
          presenterItem("ratio", [
            presenterText("ratio-label", "Screen ratio: "),
            presenterText("ratio-value", "16:9", true),
          ]),
          presenterItem("font", [
            presenterText("font-label", "Font: "),
            presenterText(
              "font-value",
              "Use basic fonts such as Arial, Calibri, Times New Roman, etc.",
              true,
            ),
          ]),
        ],
      },
      {
        kind: "group",
        id: "coi",
        title: "COI (Conflict of Interest) Declaration",
        blocks: [
          {
            kind: "list",
            id: "coi-list",
            items: [
              presenterItem("disclosure", [
                presenterText(
                  "disclosure",
                  "All Speakers are asked to include in their presentation a disclosure statement regarding the existence of any conflicts of interest, and name(s) of the company/ companies, if any conflict of interest exists.",
                ),
              ]),
              presenterItem(
                "second-page",
                [
                  presenterText(
                    "second-page",
                    "Please add the disclosure statement on the second page of the presentation slide.",
                  ),
                ],
                [
                  presenterItem("form-a", [
                    presenterText(
                      "form-a-lead",
                      "If a conflict of interest relevant to the presentation doesn't exist, please use ",
                    ),
                    presenterText("form-a-value", "the Form A slide.", true),
                  ]),
                  presenterItem("form-b", [
                    presenterText(
                      "form-b-lead",
                      "If a conflict of interest relevant to the presentation exists, please use ",
                    ),
                    presenterText("form-b-value", "the Form B slide.", true),
                  ]),
                ],
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "equipment",
    title: "4. Equipment",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "equipment-list",
        items: [
          presenterItem("podium", [
            presenterText(
              "podium",
              "A monitor, mouse and smart pointer will be provided on the podium for speakers.",
            ),
          ]),
          presenterItem("keyboard", [presenterText("keyboard", "No keyboard on the podium")]),
          presenterItem("notes", [
            presenterText(
              "notes",
              "For the convenience of speakers, we will provide a slide note function so that you can see the script in the PPT which you prepared.",
            ),
          ]),
        ],
      },
      {
        kind: "group",
        id: "mac",
        title: "Important note for Macintosh Users",
        blocks: [
          {
            kind: "list",
            id: "mac-list",
            items: [
              presenterItem("laptop", [
                presenterText(
                  "laptop",
                  "The use of personal laptops and Macs in the session room is not recommended.",
                ),
              ]),
              presenterItem("preview", [
                presenterText(
                  "preview",
                  "If you wish to present with your own laptop (IBM or Mac), please visit the Preview Room at least 2 hours prior to your scheduled session.",
                ),
              ]),
              presenterItem("connector", [
                presenterText(
                  "connector",
                  "If you use your own Macintosh with our beam projector, we ask to bring your Mac RGB Connector as we don't provide any devices for Macintosh.",
                ),
              ]),
              presenterItem(
                "prepare",
                [
                  presenterText(
                    "prepare",
                    "In order to use Mac presentation files on an IBM(PC) compatible computer, please note that you need to prepare it according to the instructions below, before bringing it to the preview room.",
                  ),
                ],
                [
                  presenterItem("fonts", [
                    presenterText(
                      "fonts",
                      "Use basic fonts, such as Arial, Calibri, Times New Roman, etc. (special fonts might be changed to a default font on a PowerPoint based IBM).",
                    ),
                  ]),
                  presenterItem("jpg", [
                    presenterText(
                      "jpg",
                      "Insert pictures as JPG files (and not TIF, PNG or PICT - these images will not be visible on a PowerPoint based IBM).",
                    ),
                  ]),
                ],
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "submission",
    title: "5. Submission the Presentation File",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "submission-list",
        items: [
          presenterItem("hours", [
            presenterText("hours-lead", "Please submit your presentation file to the Preview Room "),
            presenterText("hours-value", "at least 2 hours", true),
            presenterText(
              "hours-tail",
              " prior to your scheduled session to ensure the files function correctly in the given environment.",
            ),
          ]),
          presenterItem("versions", [
            presenterText(
              "versions",
              "Presentation slides should be prepared as an MS PowerPoint file in 2010 or 2013 versions. If you have any other types of presentation files, please inform our staff in the Preview Room in advance.",
            ),
          ]),
          presenterItem("usb", [
            presenterText(
              "usb",
              "If you have video files, we recommend that you save the videos separately on USB and submit them additionally.",
            ),
          ]),
        ],
      },
    ],
  },
  {
    id: "preview-room",
    title: "6. Preview Room",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "preview-list",
        items: [
          presenterItem("location", [
            presenterText(
              "location",
              "Location: Preview Room (Jade Room, 2F, Lotte Hotel Seoul)",
            ),
          ]),
          presenterItem("hours", [
            presenterText(
              "hours",
              "Operation Hours: April 23 (Thu) - 24 (Fri), 07:00 - 18:00 / April 25 (Sat), 07:00 - 11:30",
            ),
          ]),
          presenterItem("sound", [
            presenterText(
              "sound",
              "If your file contains video or sound, please inform our staff and check the system in advance.",
            ),
          ]),
        ],
      },
    ],
  },
];
