# Get all pictures from folder

Here is a little script to get all pictures from within a folder, which is chosen by an editor.

The aim is, to maintain a images meta values in the yellow media-structure. So every image is maintained, no matter where in the project it is used.

Steps to use meta-data:
- create meta-data-template within page-template-section
- select this template in ServerManager -> Options -> Metadata-Template
- create a form within meta-data-template
- activate it in media-structure (on the top right)
- grab the data from within a section-template

You have two possibilities to get the meta-data:
1. $CMS_VALUE(ref(x).meta("meta_image_description"))$
2. $CMS_VALUE(x.memdia.meta("meta_image_description"))$

## Page-template FORM
````
<CMS_INPUT_TEXT name="meta_image_title" hFill="yes" singleLine="yes">
    <LANGINFOS>
        <LANGINFO lang="*" label="Title"/>
    </LANGINFOS>
</CMS_INPUT_TEXT>

<CMS_INPUT_TEXT name="meta_image_description" hFill="yes" singleLine="yes">
    <LANGINFOS>
        <LANGINFO lang="*" label="Short description"/>
    </LANGINFOS>
</CMS_INPUT_TEXT>
````

## Section-template FORM
````
// Here the editor can select the folder which contains all the images
<FS_REFERENCE name="st_folder" allowEmpty="no" hFill="yes" useLanguages="no">
    <FILTER>
        <ALLOW type="mediafolder"/>
    </FILTER>
    <LANGINFOS>
        <LANGINFO lang="*" label="Image-folder"/>
    </LANGINFOS>
    <PROJECTS>
        <LOCAL name=".">
            <SOURCES>
                <FOLDER name="new_gallery" store="mediastore"/>
            </SOURCES>
        </LOCAL>
    </PROJECTS>
</FS_REFERENCE>
````

## Section-template HTML
````
<CMS_HEADER>
</CMS_HEADER>

// Let's a list which contains all the images as mediaClass-objects
$CMS_SET(mediaClass,class("de.espirit.firstspirit.access.store.mediastore.Media"))$
$CMS_SET(media_list, st_folder.get().getChildren(mediaClass, false).toList())$

// Loop through the list
$CMS_FOR(x, media_list)$
    <img class="card-img-top img-fluid bs-gallery-img" src="$CMS_REF(x)$" />
    <h3 class="card-title">$CMS_VALUE(ref(x).meta("meta_image_title"))$. Bild</h3>
    <p>$CMS_VALUE(ref(x).meta("meta_image_description"))$</p>
$CMS_END_FOR$

````
