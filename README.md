# AzureEyes
Microsoft Azure Cognitive servisi kullanılarak resim analizi ve resimden metin okuma üzerine başlangıç Node.js projesi
https://medium.com/@yakupad/biz-bak%C4%B1yoruz-peki-azure-ne-g%C3%B6r%C3%BCyor-6b2f26282e37

- Resim Analizi (Analyze an Image)
- Önizleme Resmi Yaratma (Generate a thumbnail)
- Resimden Metin Okuma (Extract printed text (OCR))

### Resim Analizi (Analyze an Image) Sonuçları
Bu özellik için Google resimlerden bulduğum kız kulesi resmini servise analize gönderdim ve sonuç aşağıdaki gibi.Bence sonuçlar mükemmel!

```json
{
  "categories": [
    {
      "name": "building_",
      "score": 0.95703125,
      "detail": {
        "landmarks": [
          {
            "name": "Maiden's Tower",
            "confidence": 0.999829888343811
          }
        ]
      }
    },
    {
      "name": "outdoor_",
      "score": 0.01171875,
      "detail": {
        "landmarks": [
          {
            "name": "Maiden's Tower",
            "confidence": 0.999829888343811
          }
        ]
      }
    }
  ],
  "description": {
    "tags": [
      "outdoor",
      "water",
      "boat",
      "light",
      "ship",
      "building",
      "large",
      "city",
      "yellow",
      "cloudy",
      "view",
      "body",
      "lake",
      "front",
      "sitting",
      "river",
      "ocean",
      "night",
      "tower",
      "riding",
      "train",
      "sunset",
      "white",
      "traffic"
    ],
    "captions": [
      {
        "text": "a large ship in a body of water with Maiden's Tower in the background",
        "confidence": 0.7372955067089553
      }
    ]
  },
  "color": {
    "dominantColorForeground": "Brown",
    "dominantColorBackground": "Black",
    "dominantColors": [],
    "accentColor": "C0AF0B",
    "isBwImg": false
  },
  "requestId": "23840ac5-e00e-461a-a9e6-6261007fb63b",
  "metadata": {
    "height": 2848,
    "width": 4288,
    "format": "Jpeg"
  }
}
```
## Önizleme Resmi Yaratma (Generate a thumbnail) Sonucu

![aÖnizleme Resmi Yaratma (Generate a thumbnail) Sonucu](https://cdn-images-1.medium.com/max/1600/1*MOtJTUqXiq1ObH26KMpgyQ.png)

## Resimden Metin Okuma (Extract printed text (OCR)) Sonucu
```json
{
  "language": "tr",
  "orientation": "Up",
  "textAngle": 0,
  "regions": [
    {
      "boundingBox": "136,430,2190,2788",
      "lines": [
        {
          "boundingBox": "358,430,1707,226",
          "words": [
            {
              "boundingBox": "358,430,953,187",
              "text": "İSTİKLAL"
            },
            {
              "boundingBox": "1409,465,656,191",
              "text": "MARŞI"
            }
          ]
        },
        {
          "boundingBox": "167,800,2114,123",
          "words": [
            {
              "boundingBox": "167,800,351,119",
              "text": "Korkma,"
            },
            {
              "boundingBox": "562,804,326,95",
              "text": "sönmez"
            },
            {
              "boundingBox": "931,800,94,99",
              "text": "bu"
            },
            {
              "boundingBox": "1069,800,443,123",
              "text": "şafaklarda"
            },
            {
              "boundingBox": "1554,804,248,118",
              "text": "yüzen"
            },
            {
              "boundingBox": "1846,800,65,99",
              "text": "al"
            },
            {
              "boundingBox": "1955,800,326,119",
              "text": "sancak;"
            }
          ]
        },
        {
          "boundingBox": "164,1008,2162,122",
          "words": [
            {
              "boundingBox": "164,1009,450,98",
              "text": "Sönmeden"
            },
            {
              "boundingBox": "656,1008,436,122",
              "text": "yurdumun"
            },
            {
              "boundingBox": "1139,1008,340,99",
              "text": "üstünde"
            },
            {
              "boundingBox": "1518,1012,221,95",
              "text": "tüten"
            },
            {
              "boundingBox": "1783,1033,95,73",
              "text": "en"
            },
            {
              "boundingBox": "1922,1033,141,74",
              "text": "son"
            },
            {
              "boundingBox": "2107,1008,219,99",
              "text": "ocak."
            }
          ]
        },
        {
          "boundingBox": "164,1217,1783,122",
          "words": [
            {
              "boundingBox": "164,1219,57,96",
              "text": "0"
            },
            {
              "boundingBox": "265,1217,255,98",
              "text": "benim"
            },
            {
              "boundingBox": "566,1217,419,98",
              "text": "milletimin"
            },
            {
              "boundingBox": "1027,1217,380,122",
              "text": "yıldızıdır,"
            },
            {
              "boundingBox": "1454,1217,493,122",
              "text": "parlayacak;"
            }
          ]
        },
        {
          "boundingBox": "164,1425,1780,119",
          "words": [
            {
              "boundingBox": "164,1427,57,97",
              "text": "0"
            },
            {
              "boundingBox": "265,1425,393,119",
              "text": "benimdir,"
            },
            {
              "boundingBox": "701,1450,44,74",
              "text": "o"
            },
            {
              "boundingBox": "789,1425,254,99",
              "text": "benim"
            },
            {
              "boundingBox": "1090,1425,543,99",
              "text": "milletimindir"
            },
            {
              "boundingBox": "1670,1425,274,99",
              "text": "ancak,"
            }
          ]
        },
        {
          "boundingBox": "136,1870,1963,123",
          "words": [
            {
              "boundingBox": "136,1873,304,120",
              "text": "çatma,"
            },
            {
              "boundingBox": "487,1871,289,98",
              "text": "kurban"
            },
            {
              "boundingBox": "821,1870,310,122",
              "text": "olayım,"
            },
            {
              "boundingBox": "1174,1870,310,123",
              "text": "çehreni"
            },
            {
              "boundingBox": "1528,1895,96,97",
              "text": "ey"
            },
            {
              "boundingBox": "1666,1870,188,99",
              "text": "nazlı"
            },
            {
              "boundingBox": "1901,1870,198,99",
              "text": "hilal!"
            }
          ]
        },
        {
          "boundingBox": "139,2079,2126,122",
          "words": [
            {
              "boundingBox": "139,2079,428,98",
              "text": "Kahraman"
            },
            {
              "boundingBox": "614,2079,260,98",
              "text": "ırkıma"
            },
            {
              "boundingBox": "921,2079,109,98",
              "text": "bir"
            },
            {
              "boundingBox": "1067,2079,152,122",
              "text": "gül!"
            },
            {
              "boundingBox": "1271,2083,104,94",
              "text": "Ne"
            },
            {
              "boundingBox": "1419,2079,93,98",
              "text": "bu"
            },
            {
              "boundingBox": "1556,2079,287,122",
              "text": "şiddet,"
            },
            {
              "boundingBox": "1889,2079,94,98",
              "text": "bu"
            },
            {
              "boundingBox": "2027,2079,238,98",
              "text": "celal?"
            }
          ]
        },
        {
          "boundingBox": "137,2287,1909,119",
          "words": [
            {
              "boundingBox": "137,2290,205,95",
              "text": "Sana"
            },
            {
              "boundingBox": "386,2287,251,98",
              "text": "olmaz"
            },
            {
              "boundingBox": "677,2287,333,98",
              "text": "dökülen"
            },
            {
              "boundingBox": "1057,2287,442,98",
              "text": "kanlarımız"
            },
            {
              "boundingBox": "1539,2312,230,73",
              "text": "sonra"
            },
            {
              "boundingBox": "1816,2287,230,119",
              "text": "helal;"
            }
          ]
        },
        {
          "boundingBox": "139,2495,1821,122",
          "words": [
            {
              "boundingBox": "139,2495,368,120",
              "text": "Hakkıdır,"
            },
            {
              "boundingBox": "554,2495,281,99",
              "text": "Hakk'a"
            },
            {
              "boundingBox": "877,2503,272,114",
              "text": "tapan,"
            },
            {
              "boundingBox": "1195,2495,419,98",
              "text": "milletimin"
            },
            {
              "boundingBox": "1660,2495,300,99",
              "text": "istiklal."
            }
          ]
        },
        {
          "boundingBox": "353,3055,1620,163",
          "words": [
            {
              "boundingBox": "353,3056,676,130",
              "text": "Mehmet"
            },
            {
              "boundingBox": "1101,3055,335,129",
              "text": "Akif"
            },
            {
              "boundingBox": "1513,3061,460,157",
              "text": "Ersoy"
            }
          ]
        }
      ]
    }
  ]
}
```
## Çalıştırma

### Resim Analizi (Analyze an Image) için 
``` node cognitiveAPI.js analyze ```
### Önizleme Resmi Yaratma (Generate a thumbnail) için
``` node cognitiveAPI.js thumbnail ```
### Resimden Metin Okuma (Extract printed text (OCR)) için
``` node rcognitiveAPI.js OCR ```

#### Daha Fazlası için Azure Recognitive Service dökümanını inceleyebilirsiniz. → https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/
