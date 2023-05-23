#!/usr/bin/python
# -*- coding: utf-8 -*-
import glob
for fileName in glob.glob ( '*.js' ):
    print(fileName)
    f = open(fileName, "r")
    text = f.read()
    f.close()

    text = text.replace('á', '&aacute;')
    text = text.replace('é', '&eacute;')
    text = text.replace('í', '&iacute;')
    text = text.replace('ó', '&oacute;')
    text = text.replace('ú', '&uacute;')
    text = text.replace('ñ', '&ntilde;')

    text = text.replace('Á', '&Aacute;')
    text = text.replace('É', '&Eacute;')
    text = text.replace('Í', '&Iacute;')
    text = text.replace('Ó', '&Oacute;')
    text = text.replace('Ú', '&Uacute;')
    text = text.replace('Ñ', '&Ntilde;')

    text = text.replace('¿', '&iquest;')
    text = text.replace('¡', '&iexcl;')
    text = text.replace('º', '&ordm;')

    text = text.replace('€', '&euro;')

    f = open(fileName, "w")
    f.write(text)
    f.close()
