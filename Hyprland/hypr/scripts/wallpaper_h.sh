
cd "/mnt/2TB/.Pics/Wallpaper/"
SWWW_CANTIDAD_DE_LINEAS=`find | grep jpg | wc -l`
SWWW_ELEGIR_1=$((1+RANDOM%$SWWW_CANTIDAD_DE_LINEAS))
SWWW_ELEGIR_2=$((1+RANDOM%$SWWW_CANTIDAD_DE_LINEAS))
SWWW_WALLPAPER_1=`find | grep jpg | sed -n $((SWWW_ELEGIR_1))p`
SWWW_WALLPAPER_2=`find | grep jpg | sed -n $((SWWW_ELEGIR_2))p`
swww img -o HDMI-A-1 $SWWW_WALLPAPER_1 --transition-type wipe 
swww img -o DVI-D-1 $SWWW_WALLPAPER_2 --transition-type wipe