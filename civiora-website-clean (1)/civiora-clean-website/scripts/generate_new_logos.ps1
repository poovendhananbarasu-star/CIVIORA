Add-Type -AssemblyName System.Drawing

$srcColorPath = 'C:\Users\TECHVITY\.gemini\antigravity\brain\a1a962ae-a00f-4ae4-b03d-4154e66f9ce9\.user_uploaded\media_1793708509143_74563cb7.png'
$srcWhitePath = 'C:\Users\TECHVITY\.gemini\antigravity\brain\a1a962ae-a00f-4ae4-b03d-4154e66f9ce9\.user_uploaded\media_1793708516121_ea15bf21.png'

$srcColor = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcColorPath).Path)
$srcWhite = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcWhitePath).Path)

# 1. Full Lockup Crop bounds: X: 32..1011 (width 980), Y: 123..907 (height 785)
$cropX = 32
$cropY = 123
$cropW = 980
$cropH = 785

# Function to crop a region from a Bitmap
function Crop-Bitmap($sourceBmp, $x, $y, $w, $h) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $g.DrawImage($sourceBmp, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    return $cropped
}

# 1. Save civiora-logo-full-lockup-transparent.png
$lockupColor = Crop-Bitmap $srcColor $cropX $cropY $cropW $cropH
$dest1 = (Resolve-Path 'src\assets').Path + '\civiora-logo-full-lockup-transparent.png'
$lockupColor.Save($dest1, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved: $dest1 ($($lockupColor.Width)x$($lockupColor.Height))"
$lockupColor.Dispose()

# 2. Save civiora-logo-white-lockup.png
$lockupWhite = Crop-Bitmap $srcWhite $cropX $cropY $cropW $cropH
$dest2 = (Resolve-Path 'src\assets').Path + '\civiora-logo-white-lockup.png'
$lockupWhite.Save($dest2, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved: $dest2 ($($lockupWhite.Width)x$($lockupWhite.Height))"
$lockupWhite.Dispose()

# 3. Save civiora-mark-icon.png (Icon mark alone: X=265, Y=123, W=500, H=448)
$iconMark = Crop-Bitmap $srcColor 265 123 500 448
$dest3 = (Resolve-Path 'src\assets').Path + '\civiora-mark-icon.png'
$iconMark.Save($dest3, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved: $dest3 ($($iconMark.Width)x$($iconMark.Height))"
$iconMark.Dispose()

# 4. Save public\favicon.png (Square 512x512 with icon mark centered)
$faviconBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gFav = [System.Drawing.Graphics]::FromImage($faviconBmp)
$gFav.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gFav.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gFav.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gFav.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Icon source is X=285..745 (W=461), Y=143..550 (H=408)
$iconSrcRect = New-Object System.Drawing.Rectangle(285, 143, 461, 408)
# Fit within 460x460 box centered in 512x512 (26px padding)
# Aspect ratio 461 / 408 = 1.13. Fit to height 440: width = 440 * (461/408) = 497.
# Let's fit within 460 x 460:
$targetW = 460
$targetH = [int](460 * (408 / 461)) # ~407
$destX = [int]((512 - $targetW) / 2)
$destY = [int]((512 - $targetH) / 2)
$favDestRect = New-Object System.Drawing.Rectangle($destX, $destY, $targetW, $targetH)
$gFav.DrawImage($srcColor, $favDestRect, $iconSrcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gFav.Dispose()

$destFav = (Resolve-Path 'public').Path + '\favicon.png'
$faviconBmp.Save($destFav, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved: $destFav ($($faviconBmp.Width)x$($faviconBmp.Height))"
$faviconBmp.Dispose()

# 5. Save Civiora Without BG.png (1024x1024 full transparent)
$destNoBg = (Resolve-Path 'src\assets').Path + '\Civiora Without BG.png'
$srcColor.Save($destNoBg, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved: $destNoBg"

# 6. Save Logo.png (1024x1024 on white background)
$logoWithWhiteBg = New-Object System.Drawing.Bitmap(1024, 1024, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gLogo = [System.Drawing.Graphics]::FromImage($logoWithWhiteBg)
$gLogo.Clear([System.Drawing.Color]::White)
$gLogo.DrawImage($srcColor, 0, 0, 1024, 1024)
$gLogo.Dispose()
$destLogo = (Resolve-Path 'src\assets').Path + '\Logo.png'
$logoWithWhiteBg.Save($destLogo, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved: $destLogo"
$logoWithWhiteBg.Dispose()

$srcColor.Dispose()
$srcWhite.Dispose()
Write-Host "All assets generated successfully!"

